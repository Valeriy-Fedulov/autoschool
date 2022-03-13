import Image from "next/image";
import s from "../styles/layout/header.module.scss";

export default function Header() {
  return (
    <header className={s.pageHeader}>
      <div>
        <nav className={s.pageHeader__nav}>
          <div className={s.logo}>
            <Image
              src="/images/logo/logo.png"
              // className={s.logo__img}
              width={45}
              height={63}
              alt="Логотип ТСО України"
            ></Image>
            <div className={s.title}>
              <span className={s.title__organization}>УМОУСЦ ТСО України</span>
              <span className={s.title__courses}>Курси водіїв</span>
              <div className={s.location}>
                <Image
                  className={s.location__icon}
                  src="/location.svg"
                  width={10}
                  height={10}
                  alt="Іконка локація"
                ></Image>
                <span className={s.location__city}>м. Ужгород</span>
                <span className={s.location__street}>вул. Підгірна, 28</span>
              </div>
            </div>
          </div>
          <div className={s.menuNav}>
            <Image
              // className={s.menuNav__icon}
              src="/menu.svg"
              width={25}
              height={25}
              alt="Іконка головне меню"
            ></Image>
            <Image
              // className={s.menuNav__icon}
              src="/theme.svg"
              width={25}
              height={25}
              alt="Іконка теми"
            ></Image>
          </div>
        </nav>
      </div>
    </header>
  );
}
