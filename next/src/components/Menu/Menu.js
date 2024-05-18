import Link from "next/link";
import styles from "./Menu.module.css"


export default function Menu() {
  return (
      <div className={styles.menu}>
        <Link className={styles.link} href={'/'}>Авторизация</Link>
        <Link className={styles.link} href={'/reg'}>Регистрация</Link>
      </div>
  );
}
