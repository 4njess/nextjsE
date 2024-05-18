import Link from "next/link"
import styles from "./Header.module.css"

export default function Header(){
    return(
    <div className={styles.headerbc}>
        <div className={styles.logo}>
            <img className={styles.image} src="h1.svg"></img>
            <p style={{width:"50%"}}>ГБУЗ ПК "Краевая клиническая психиатрическая больница"</p>
        </div>
            <Link className={styles.Link} href="/infocb">Кабинет</Link>
            <Link className={styles.Link}  href="/infovr">Врачи</Link>
            <Link className={styles.Link}  href="/info">Главная</Link>
     </div>)
}