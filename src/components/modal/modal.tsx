import React from 'react';
import Portal from '../portal/portal';
import './modal.scss';

interface ModalInterface {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({
  title,
  isOpen,
  children,
}: ModalInterface): React.ReactElement => (
  <>
    {isOpen && (
      <Portal>
        <div className="modal-overlay">
          <div className="modal-window">
            <div className="modal-header">
              <div className="modal-header__title">{title}</div>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </Portal>
    )}
  </>
);

export default Modal;
