import Menu from "@/components/Menu/Menu";
import Auth from "@/components/Auth/Auth";
import styles from "./page.module.css";

export const metadata ={
  title: 'Авторизация',

}

export default function Home() {
  
  return (
    <main className={styles.main}>
      <head>
        <link rel="icon" href="/icon.svg"></link>
      </head>
      <div className={styles.formhold}>
        <img style={{position: "absolute", width: "76px", top:"6px", right: "42px"}} src="h1.svg"></img>
        <Auth></Auth>
        <Menu></Menu>
      </div>
    </main>
  );
}
