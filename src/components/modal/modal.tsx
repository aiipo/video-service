import React, { useEffect, useRef } from 'react';
import Portal from '../portal/portal';
import './modal.scss';
import { eventTypes } from '../../constants/event-types.constants';

interface ModalInterface {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({
  title,
  isOpen,
  onClose,
  children,
}: ModalInterface): React.ReactElement => {
  const modalWindowRef = useRef(null);

  useEffect(() => {
    const handleClose = (event: KeyboardEvent): void => {
      if (isOpen && event.key === eventTypes.Escape) {
        onClose();
      }
    };
    document.body.addEventListener(eventTypes.keydown, handleClose);
    return (): void => {
      document.body.removeEventListener(eventTypes.keydown, handleClose);
    };
  }, [isOpen, onClose]);

  const handleClick = (event: React.MouseEvent): void => {
    if ((event.target as HTMLElement).contains(modalWindowRef.current)) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal-overlay" onClick={handleClick} role="presentation">
            <div className="modal-window" ref={modalWindowRef}>
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
};

export default Modal;
