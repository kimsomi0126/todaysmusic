/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import Modal from '../components/common/Modal';
import { FormWrap, IdWrap, IptItem, SubmitBtn } from '../styles/user/user';
import { PageTitle } from '../styles/common/basic';
import { appFireStore } from '../fb/fbconfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Signup = () => {
  const [checkTxt, setCheckTxt] = useState('');
  const { modalTitle, modalDesc, modalIsOpen, getSignup, handleOk } =
    useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (checkTxt !== '') {
      alert('이메일을 다시 작성해주세요.');
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
      setCheckTxt('사용중인 이메일입니다.');
    } else {
      setCheckTxt('');
    }
  };

  return (
    <BasicLayout>
      <FormWrap>
        <PageTitle className="black">
          <h4>회원정보 입력</h4>
        </PageTitle>
        <form action="" onSubmit={e => handleSubmit(e)}>
          <IdWrap>
            <IptItem
              type="email"
              placeholder="이메일입력"
              name="email"
              required
              onChange={e => {
                idCheck(e);
              }}
            />
            {checkTxt === '' ? null : <small>{checkTxt}</small>}
          </IdWrap>
          <IptItem
            type="password"
            placeholder="비밀번호입력"
            name="password"
            required
          />
          <SubmitBtn>회원가입</SubmitBtn>
          <Link to={'/'}>메인으로</Link>
        </form>
      </FormWrap>
      <Modal
        title={modalTitle}
        desc={modalDesc}
        onClick={handleOk}
        isOpen={modalIsOpen}
      />
    </BasicLayout>
  );
};

export default Signup;
