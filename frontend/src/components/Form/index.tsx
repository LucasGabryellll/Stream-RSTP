"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { object, string, InferType } from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { RiLockFill } from "@react-icons/all-files/ri/RiLockFill";

import { userLogin } from "@/service/fetch/login";
import { NotificationType, toasty } from "../Toasty";

import styles from "./styles.module.css";
import { useClient } from "@/hooks/useClient";

const loginSchema = object({
  login: string().required("O Campo Login é obrigatório."),
  password: string().required("O Campo Senha é obrigatório."),
});

type LoginUserSchema = InferType<typeof loginSchema>

export function Form() {
  const { signInContext } = useClient();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginUserSchema>({ resolver: yupResolver(loginSchema) })

  const [toogleEye, setToogleEye] = useState(false);

  const navigation = useRouter();

  async function signIn(dataUser: LoginUserSchema) {
    try {
      //const data = await userLogin({ password: dataUser.password, user: dataUser.login });

      navigation.push('/stream');
      //if (data?.result) {
        //signInContext({ password: dataUser.password, username: data.result.name, token: data.result.sessionid });

      //}

      //else {
      //  toasty({ message: 'Login ou senha inválido.', type: NotificationType.ERROR });
      //}
      
    } catch (error: any) {
      toasty({ message: `${error?.response?.data?.message}`, type: NotificationType.ERROR });
    }
  }

  function handleToogleEye(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setToogleEye(prevState => !prevState);
  }

  return (
    <form
      className={styles['content-form']}
      onSubmit={handleSubmit(signIn)}
    >
      <div className={styles['logo']}>
        <Image
          width={80}
          height={80}
          src={"https://vidatel.net/wp-content/uploads/2019/08/cropped-icon-180x180.png"}
          alt="Logo"
          priority
        />
        <p>VIDATEL</p>
      </div>

      <div className={styles['content-input']}>
        <p>Usuário:</p>

        <div className={styles['icon-input']}>
          <BiUser
            className="h-5"
            alt="userIcont"
          />

          <input
            className={styles['input']}
            type="text"
            placeholder="Digite seu usuario..."
            {...register('login')}
          />
        </div>

        <span className={styles['erros']}>{errors?.login?.message}</span>
      </div>

      <div className={styles['content-input']}>
        <p>Senha:</p>

        <div className={`${styles['icon-input']} relative`}>
          <RiLockFill
            className="h-5"
            alt="eye-icon"
          />

          <input
            className={styles['input']}
            type={!toogleEye ? "password" : "text"}
            placeholder="Digite sua senha..."
            {...register('password')}
          />

          <button
            className={styles['icon-eye-pass']}
            onClick={handleToogleEye}
            type="button"
          >
            <AiFillEye
              alt="eye-icon"
            />
          </button>
        </div>
        <span className={styles['erros']}>{errors?.login?.message}</span>

      </div>

      <button
        className={styles['button']}
        type="submit"
      >
        ENTRAR
      </button>
    </form>
  );
}