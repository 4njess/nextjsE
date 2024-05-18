import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Link from "next/link";
export const metadata ={
    title: 'Главная',
  }
export default function main(){
    return(
        <div className={styles.main}>
            <Header></Header>
            <head>
                <title>Врачи</title>
                <link rel="icon" href="icon.svg"></link>
            </head>
            <div className={styles.infblock}>
                <h1>Наши специалисты:</h1>
                <div className={styles.infitem}>
                    <img style={{height: "136px", borderRight:"3px solid"}} src="v1.png"></img>
                    <div className={styles.vrinfo}>
                        <p>Ярви Сами Антеро</p>
                        <p>Специальность: Психиатр</p>
                        <p>Стаж: 12 лет</p>
                    </div>
                    <div>
                    <Link className={styles.link}  href="/medform">Записаться</Link>
                    </div>  
                </div>
                <div className={styles.infitem}>
                    <img style={{height: "136px", borderRight:"3px solid"}} src="v1.png"></img>
                    <div className={styles.vrinfo}>
                        <p>Ярви Сами Антеро</p>
                        <p>Специальность: Психиатр</p>
                        <p>Стаж: 12 лет</p>
                    </div>
                    <div>
                    <Link className={styles.link}  href="/medform">Записаться</Link>
                    </div>
                </div>
                <div className={styles.infitem}>
                    <img style={{height: "136px", borderRight:"3px solid"}} src="v1.png"></img>
                    <div className={styles.vrinfo}>
                        <p>Ярви Сами Антеро</p>
                        <p>Специальность: Психиатр</p>
                        <p>Стаж: 12 лет</p>
                    </div>
                    <div>
                    <Link className={styles.link}  href="/medform">Записаться</Link>
                    </div>
                </div>
                <div className={styles.infitem}>
                    <img style={{height: "136px", borderRight:"3px solid"}} src="v1.png"></img>
                    <div className={styles.vrinfo}>
                        <p>Ярви Сами Антеро</p>
                        <p>Специальность: Психиатр</p>
                        <p>Стаж: 12 лет</p>                
                    </div>
                    <div>
                    <Link className={styles.link}  href="/medform">Записаться</Link>
                    </div>
                </div>
                <div className={styles.infitem}>
                    <img style={{height: "136px", borderRight:"3px solid"}} src="v1.png"></img>
                    <div className={styles.vrinfo}>
                        <p>Ярви Сами Антеро</p>
                        <p>Специальность: Психиатр</p>
                        <p>Стаж: 12 лет</p>                
                    </div>
                    <div>
                    <Link className={styles.link}  href="/medform">Записаться</Link>
                    </div>
                </div>
                <div className={styles.infitem}>
                    <img style={{height: "136px", borderRight:"3px solid"}} src="v1.png"></img>
                    <div className={styles.vrinfo}>
                        <p>Ярви Сами Антеро</p>
                        <p>Специальность: Психиатр</p>
                        <p>Стаж: 12 лет</p>                
                    </div>
                    <div>
                    <Link className={styles.link}  href="/medform">Записаться</Link>
                    </div>
                </div>
            </div>    
        </div>
    )
}