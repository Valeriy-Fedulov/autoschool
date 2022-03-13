import Image from "next/image";
import s from "../styles/layout/header.module.scss";

export default function Header() {
  return (
    <header className={s.pageHeader}>
      <div>
        <nav className={s.pageHeader__nav}>
          <div className={s.logo}>
            <div className={s.logo__img}>
              <Image
                src="/images/logo/logo.png"
                width={45}
                height={63}
                alt="Логотип ТСО України"
              ></Image>
            </div>
            <div className={s.title}>
              <span className={s.title__organization}>УМОУСЦ ТСО України</span>
              <span className={s.title__courses}>Курси водіїв</span>
              <div className={s.location}>
                <div className={s.location__icon}>
                  <Image
                    src="/location.svg"
                    width={10}
                    height={10}
                    alt="Іконка локація"
                  ></Image>
                </div>
                <span className={s.location__city}>м. Ужгород</span>
                <span className={s.location__street}>вул. Підгірна, 28</span>
              </div>
            </div>
          </div>
          <div className={s.menuNav}>
            <div className={s.menuNav__icon}>
              <Image
                src="/menu.svg"
                width={25}
                height={25}
                alt="Іконка головне меню"
              ></Image>
            </div>
            <div className={s.menuNav__icon}>
              <Image
                src="/theme.svg"
                width={25}
                height={25}
                alt="Іконка теми"
              ></Image>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
