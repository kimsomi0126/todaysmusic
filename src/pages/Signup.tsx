/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import Modal from '../components/common/Modal';
import {
  BgInner,
  FormWrap,
  IdWrap,
  IptItem,
  SubmitBtn,
} from '../styles/user/user';
import { PageTitle } from '../styles/common/basic';
import { appFireStore } from '../fb/fbconfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Signup = () => {
  const [checkTxt, setCheckTxt] = useState('');
  const [pwCheckTxt, setPwCheckTxt] = useState('');
  const { modalTitle, modalDesc, modalIsOpen, getSignup, handleOk } =
    useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (checkTxt !== '' && pwCheckTxt !== '') {
      alert('회원정보를 다시 작성해주세요.');
      return;
    } else if (checkTxt !== '') {
      alert('이메일을 다시 작성해주세요.');
      return;
    } else if (pwCheckTxt !== '') {
      alert('비밀번호를 다시 작성해주세요.');
      return;
    }

    const email = e.target.email.value;
    const password = e.target.password.value;
    getSignup(email, password);
  };

  const idCheck = async (e: any) => {
    const email = e.target.value;
    const q = query(
      collection(appFireStore, 'user'),
      where('email', '==', email),
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length === 1) {
      setCheckTxt('이미 사용중인 이메일입니다.');
    } else {
      setCheckTxt('');
    }
  };
  const pwCheck = async (e: any) => {
    const password = e.target.value;

    if (password.length > 0 && password.length < 6) {
      setPwCheckTxt('비밀번호는 6자 이상 입력해주세요.');
    } else {
      setPwCheckTxt('');
    }
  };

  return (
    <BgInner>
      <BasicLayout>
        <FormWrap>
          <PageTitle>
            <h4>회원정보 입력</h4>
          </PageTitle>
          <form action="" onSubmit={e => handleSubmit(e)}>
            <IdWrap>
              <IptItem
                type="email"
                placeholder="이메일 입력"
                name="email"
                required
                onChange={e => {
                  idCheck(e);
                }}
              />
              {checkTxt === '' ? null : <small>{checkTxt}</small>}
              <IptItem
                type="password"
                placeholder="비밀번호 입력(최소 6자 이상)"
                name="password"
                required
                onChange={e => {
                  pwCheck(e);
                }}
              />
              {pwCheckTxt === '' ? null : <small>{pwCheckTxt}</small>}
            </IdWrap>
            <SubmitBtn>회원가입</SubmitBtn>
            <Link to={'/'}>
              <span>메인으로 돌아가기</span>
            </Link>
          </form>
        </FormWrap>
        <Modal
          title={modalTitle}
          desc={modalDesc}
          onClick={handleOk}
          isOpen={modalIsOpen}
        />
      </BasicLayout>
    </BgInner>
  );
};

export default Signup;
