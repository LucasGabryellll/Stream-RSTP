"use client"
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useClient } from '@/hooks/useClient';
import { LogoutIcon } from '../Icons/LogoutIcon';
import { ModalConfirmation } from '../ModalConfirmation';

import styles from "./styles.module.css";

export function ButtonLogout() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { logout } = useClient();

  const router = useRouter();

  function handleLogout() {
    logout();

    router.push('/login');
    
    setIsOpen(false);
  }

  return (
    <>
      <div
        className={styles['content-icon']}
        onClick={() => setIsOpen(true)}
      >
        <LogoutIcon />
      </div>

      <ModalConfirmation
        descriptionModal={"Deseja Realmente Sair?"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleConfirm={handleLogout}
        handleCancel={() => setIsOpen(false)}
      />
    </>
  );
}