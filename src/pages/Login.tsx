import BasicLayout from '../layouts/BasicLayout';
import { Link } from 'react-router-dom';
import Modal from '../components/common/Modal';
import { useLogin } from '../hooks/useLogin';
import { BgInner, FormWrap, IptItem, SubmitBtn } from '../styles/user/user';
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
    <BgInner>
      <BasicLayout>
        <FormWrap>
          <PageTitle>
            <h4>Login</h4>
          </PageTitle>
          <form action="" onSubmit={e => handleSubmit(e)}>
            <IptItem
              type="email"
              placeholder="이메일 입력"
              name="email"
              //defaultValue="test@test.com"
              required
            />
            <IptItem
              type="password"
              placeholder="비밀번호 입력"
              name="password"
              //defaultValue="123123"
              required
              autoComplete="false"
            />
            <br />
            <SubmitBtn>로그인하기</SubmitBtn>
            <br />
            <br />
            <Link to={'/signup'}>
              아직 회원이 아니신가요? <span>회원가입하기</span>
            </Link>
            <Link to={'/findpw'}>
              비밀번호가 기억나지 않는다면? <span>비밀번호 재설정</span>
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

export default Login;
