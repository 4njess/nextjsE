'use client'
import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";
import axios from "axios";
import { useRef } from "react";
import { toast, Toaster } from "sonner";


export default function reg(){
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);

  const changeLogin = (e) =>{
      e.preventDefault();

      console.log(inputLogin)

      const login = inputLogin.current.value;
      console.log(login);
      const password = inputPassword.current.value;
      console.log(login); 

      axios.post('/api/registration', {login, password}, {
          withCredentials: false,
      }).then(() => {
          toast.success('Регистрация завершена!')
      }).catch(()=>{
          toast.error('Регистрация не удалась')
      })
  }
  return(
    <main className={styles.main}>
      <head>
        <title>Регистрация</title>
        <link rel="icon" href="icon.svg"></link>
      </head>
    <form onSubmit={e => changeLogin(e)}>
    <div className={styles.formhold}>
    <div className={styles.reg}>
        <h2>Регистрация</h2>
         <img style={{position: "absolute", width: "76px", top:"6px", right: "42px"}} src="h1.svg"></img>
            <div className={styles.inputs}>
            <div className={styles.inputs2}>
                <input className={styles.input} ref={inputLogin}  placeholder="Логин"></input>
             <input className={styles.input} ref={inputPassword}  placeholder="Пароль"></input>
             </div>
          <button className={styles.button}>Зарегестрироваться</button>
        </div>
      </div>
      <Menu></Menu>
    </div>
    <Toaster position="bottom-center" expand={false} richColors></Toaster>
    </form>
    
  </main>
)
}
