import BasicLayout from '../layouts/BasicLayout';
import Modal from '../components/common/Modal';
import { useLogin } from '../hooks/useLogin';
import { BgInner, FormWrap, IptItem, SubmitBtn } from '../styles/user/user';
import { PageTitle } from '../styles/common/basic';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { appFireStore } from '../fb/fbconfig';
import { useState } from 'react';

const FindPw = () => {
  const [checkTxt, setCheckTxt] = useState('');
  // 모달관련
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { modalTitle, modalDesc, modalIsOpen, getLogIn, getFindPw, handleOk } =
    useLogin();

  const idCheck = async (e: any) => {
    const email = e.target.value;
    const q = query(
      collection(appFireStore, 'user'),
      where('email', '==', email),
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length === 1) {
      setCheckTxt('');
    } else {
      setCheckTxt('등록된 이메일이 없습니다.');
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (checkTxt !== '') {
      alert('이메일을 다시 작성해주세요.');
      return;
    }
    const email = e.target.email.value;
    getFindPw(email);
  };

  return (
    <BgInner>
      <BasicLayout>
        <FormWrap>
          <PageTitle>
            <h4>비밀번호 재설정</h4>
          </PageTitle>
          <form action="" onSubmit={e => handleSubmit(e)}>
            <IptItem
              type="email"
              placeholder="이메일을 입력하세요."
              name="email"
              required
              onChange={e => {
                idCheck(e);
              }}
            />
            {checkTxt === '' ? null : <small>{checkTxt}</small>}

            <br />
            <SubmitBtn>비밀번호 재설정 메일 전송</SubmitBtn>
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

export default FindPw;
