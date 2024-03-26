import BasicLayout from '../layouts/BasicLayout';
import { Link } from 'react-router-dom';
import Modal from '../components/common/Modal';
import { useLogin } from '../hooks/useLogin';
import { FormWrap, IptItem, SubmitBtn } from '../styles/user/user';
import { PageTitle } from '../styles/common/basic';

const Login = () => {
  // 모달관련
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { modalTitle, modalDesc, modalIsOpen, getLogIn, handleOk } = useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    getLogIn(email, password);
  };

  return (
    <BasicLayout>
      <FormWrap>
        <PageTitle className="black">
          <h4>로그인</h4>
        </PageTitle>
        <form action="" onSubmit={e => handleSubmit(e)}>
          <IptItem
            type="email"
            placeholder="이메일입력"
            name="email"
            required
          />
          <IptItem
            type="password"
            placeholder="비밀번호입력 (최소 6자 이상)"
            name="password"
            required
            autoComplete="false"
          />
          <br />
          <SubmitBtn>확인</SubmitBtn>
          <br />
          <Link to={'/signup'}>회원가입하기</Link>
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

export default Login;
