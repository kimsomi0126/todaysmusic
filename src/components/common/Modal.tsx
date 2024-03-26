import React from 'react';
import { AlertModalWrap } from '../../styles/common/modal';

type Props = {
  title?: string;
  desc?: string;
  onClick?: () => void;
  isOpen?: boolean;
};
const Modal = ({ title, desc, onClick, isOpen }: Props) => {
  return (
    <>
      {isOpen ? (
        <AlertModalWrap>
          <b>{title}</b>
          <p>
            <pre>{desc}</pre>
          </p>
          <button onClick={onClick}>확인</button>
        </AlertModalWrap>
      ) : null}
    </>
  );
};

export default Modal;
