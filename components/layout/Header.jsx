import Image from "next/image";
import s from "../../styles/layout/Header.module.scss";
import LogoImg from "../LogoImg";
import LogoTitle from "../LogoTitle";

export default function Header() {
  return (
    <header className={s.pageHeader}>
      <div className="hr__shadow"></div>
      <div className="container">
        <nav className={s.pageHeader__nav}>
          <div className={s.nav__wrapper}>
            <LogoImg />
            <LogoTitle />
          </div>
          <div className={s.menuNav}>
            <div className={s.menuNav__icon}>
              <Image
                src="/menu.svg"
                width={40}
                height={40}
                alt="Іконка головне меню"
                placeholder="bluer"
              />
            </div>
            <div className={s.menuNav__icon}>
              <Image
                src="/theme.svg"
                width={40}
                height={40}
                alt="Іконка теми"
                placeholder="bluer"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}