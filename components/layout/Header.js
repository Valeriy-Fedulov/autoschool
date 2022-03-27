import Image from "next/image";
import s from "../../styles/layout/Header.module.scss";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className={s.pageHeader}>
      <div className="hr__shadow"></div>
      <nav className={s.pageHeader__nav}>
        <Logo />
        <div className={s.menuNav}>
          <div className={s.menuNav__icon}>
            <Image
              src="/menu.svg"
              width={25}
              height={25}
              alt="Іконка головне меню"
              placeholder="bluer"
            ></Image>
          </div>
          <div className={s.menuNav__icon}>
            <Image
              src="/theme.svg"
              width={25}
              height={25}
              alt="Іконка теми"
              placeholder="bluer"
            ></Image>
          </div>
        </div>
      </nav>
    </header>
  );
}
