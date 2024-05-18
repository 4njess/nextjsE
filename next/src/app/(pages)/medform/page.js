'use client'
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Link from "next/link";
import { useRef } from "react";

  export default function main(){

    const inputDate = useRef(null);
    const inputTime = useRef(null);
    const inputName = useRef(null);
    const inputMail = useRef(null);
    const ver = (e) => {
        e.preventDefault();

        const date = inputDate.current.value;
        const time = inputTime.current.value;
        const name = inputName.current.value;
        const mail = inputMail.current.value;
        localStorage.setItem("apDate", date)
        localStorage.setItem("apTime", time)
        localStorage.setItem("apName", name)
        localStorage.setItem("apMail", mail)
        localStorage.setItem("appointment", 1)
    }
    return(
        <div className={styles.main}>
            <Header></Header>
            <head>
                <title>Форма записи</title>
                <link rel="icon" href="icon.svg"></link>
            </head>
            <div className={styles.infblock}>
                <Link className={styles.link} href="/infovr">Назад</Link>
                <form onSubmit={e => ver(e)} className={styles.form1}>
                    <h2>Выберете дату:</h2>
                    <input ref={inputDate} className={styles.input1} type="date"></input>
                    <h2 style={{marginTop: "4%"}}>Выберете время:</h2>
                    <select  ref={inputTime} className={styles.input1} type="date">
                        <option value="9:00">9:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                    </select>
                    <h2 style={{marginTop: "4%"}}>Введите ваше имя:</h2>
                    <input ref={inputName} className={styles.input1} placeholder="Например: Артем"></input>
                    <h2 style={{marginTop: "4%"}}>Введите вашу почту:</h2>
                    <input ref={inputMail} className={styles.input1} placeholder="Нарпимер: abc@mail.ru"></input>
                    <button type="submit" className={styles.button}>Записаться</button>
                </form>
            </div>
        </div>
    )
}