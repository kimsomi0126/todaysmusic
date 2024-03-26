/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRecoilState } from 'recoil';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
import { UserState } from '../types/userTypes';
import { useFirebase } from './useFirebase';
import { atomIsLogin, atomLoginState } from '../atoms/atomUserState';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();
  // 로그인 정보 uid, email
  const [loginState, setLoginState] = useRecoilState(atomLoginState);
  // 안내창 state
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsNav, setModalIsNav] = useState('');
  // 로그인체크 state
  const [isLogin, setIsLogin] = useRecoilState(atomIsLogin);
  // user data 추가
  const { addDocument } = useFirebase('user');
  const auth = getAuth();

  //로그인 체크
  const loginCheck = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  };

  // 로그인
  const getLogIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // 성공 시 loginState 업데이트
        const user = userCredential.user;
        const userState = {
          email: user.email,
          uid: user.uid,
        };
        // 성공 안내
        setLoginState(userState);
        setModalIsOpen(true);
        setModalTitle('로그인 성공');
        setModalDesc('로그인에 성공했습니다.');
        setModalIsNav('/');
      })
      .catch(error => {
        // 에러 안내
        const errorMessage = error.message;
        console.log(error);
        setModalIsOpen(true);
        setModalTitle('로그인실패');
        setModalDesc(errorMessage);
      });
  };
  // 회원가입
  const getSignup = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // 회원가입 성공하면 fb에 유저정보 저장
        const user = userCredential.user;
        console.log(user);
        const userState: UserState = {
          email: user.email,
          uid: user.uid,
          createdTime: Date.now(),
        };
        addDocument(userState);

        // 성공 안내
        setModalIsOpen(true);
        setModalTitle('회원가입 성공');
        setModalDesc('환영합니다! \n 로그인페이지로 이동합니다.');
        setModalIsNav('/login');
      })
      .catch(error => {
        // 에러 안내
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setModalIsOpen(true);
        setModalTitle('회원가입실패');
        setModalDesc(errorMessage);
      });
  };
  // 로그아웃
  const getLogOut = async () => {
    try {
      // 로그아웃 후 loginState 초기화
      await signOut(auth);
      // 안내문구
      setModalIsOpen(true);
      setModalTitle('로그아웃');
      setModalDesc('로그아웃 완료');
      setModalIsNav('/');
      setLoginState({ uid: '', email: '' });
    } catch (error) {
      console.log(error);
    }
  };
  const handleOk = () => {
    setModalIsOpen(false);
    if (modalIsNav) {
      navigate(modalIsNav);
    }
  };

  return {
    loginState,
    modalTitle,
    modalDesc,
    modalIsOpen,
    handleOk,
    loginCheck,
    getLogIn,
    getSignup,
    getLogOut,
  };
};
