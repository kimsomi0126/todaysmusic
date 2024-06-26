import React, { forwardRef } from 'react';
import { AlertModalWrap } from '../../styles/common/modal';

type Props = {
  title?: string;
  desc?: string;
  onClick?: () => void;
  isOpen?: boolean;
  ref?: any;
};
const Modal = forwardRef<HTMLDivElement, Props>(
  ({ title, desc, onClick, isOpen }, alertRef) => {
    return (
      <>
        {isOpen ? (
          <AlertModalWrap ref={alertRef}>
            <b>{title}</b>
            <div>
              <pre>{desc}</pre>
            </div>
            <button onClick={onClick}>확인</button>
          </AlertModalWrap>
        ) : null}
      </>
    );
  },
);

export default Modal;
