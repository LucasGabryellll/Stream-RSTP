"use client";

import { Dispatch, SetStateAction, ReactNode } from 'react';

import styles from './styles.module.css';

interface ModalConfirmationProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  descriptionModal: string;
  handleConfirm: () => void;
  children?: ReactNode;
  handleCancel?: () => void;
}

export function ModalConfirmation({ isOpen, setIsOpen, descriptionModal, handleConfirm, handleCancel, children }: ModalConfirmationProps) {

  const onPress = () => {
    handleConfirm();
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div className={styles['container-modal']}>
      <div className={styles['content-modal']}>

        <div className={styles['container']}>
          {descriptionModal}

          <div className='mt-4'>
            {children}
          </div>

          <div className={styles['content-buttons']}>
            <button
              className={`${styles['button']} bg-green-700`}
              onClick={onPress}
            >
              CONFIRMAR
            </button>

            {handleCancel &&
              <button
                className={`${styles['button']} bg-error`}
                onClick={() => {
                  setIsOpen(false)
                  handleCancel ? handleCancel() : () => { }
                }}
              >
                CANCELAR
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}