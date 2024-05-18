'use client'
import Link from "next/link";
import styles from "./auth.module.css"
import { useRef } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { Router } from "next/router";
import appConfig, { title } from "@/app/app.config";

export default function auth(){
    const inputLogin = useRef(null);
    const inputPassword = useRef(null);

    function redirect(){
        window.location.href = '/info'
    }
    const changeLogin = (e) =>{
        e.preventDefault();

        const login = inputLogin.current.value;
        console.log(login);
        const password = inputPassword.current.value;
        console.log(password);

        axios.post('/api/login', {login, password}, {
            withCredentials: false,
        }).then((resp) => {
            toast.success('Авторизация пройдена')
            setTimeout(redirect, 1000)
            localStorage.setItem('login', login)
            localStorage.setItem('password', password)
            localStorage.setItem('appointment', 0)
            localStorage.setItem('token', resp.data.token)
        }).catch(()=>{
            toast.error('Авторизация не удалась')
        })    
    }
    return(
    
    <div className={styles.auth}>
        <form onSubmit={e => changeLogin(e)}>
        <h2>Авторизация</h2>
        <div className={styles.inputs}>
            <div className={styles.inputs2}>
                <input className={styles.input} ref={inputLogin} placeholder="Логин"></input>
                <input className={styles.input} ref={inputPassword} placeholder="Пароль"></input>
            </div>
             <button className={styles.button}>Подтвердить</button>
        </div>
        </form>
        <Toaster position="bottom-center" expand={false} richColors></Toaster>
    </div>
    )
}
