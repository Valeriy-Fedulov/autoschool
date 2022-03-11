import s from "../styles/layout/header.module.scss";

export function HeaderLayout() {
  return (
    <header className={s.pageHeader}>
      <div className="container">
        <nav className={s.pageHeader__nav}>
          <div className={s.logo}>
            <img
              className={s.logo__img}
              src="images\logo\logo.png"
              width="45"
            ></img>
            <div className={s.title}>
              <span className={s.title__organization}>УМОУСЦ ТСО України</span>
              <span className={s.title__courses}>Курси водіїв</span>
              <div className={s.location}>
                <img
                  className={s.location__icon}
                  src="location.svg"
                  width="10"
                ></img>
                <span className={s.location__city}>м. Ужгород</span>
                <span className={s.location__street}>вул. Підгірна, 28</span>
              </div>
            </div>
          </div>
          <div className={s.menuNav}>
            <img className={s.menuNav__icon} src="menu.svg"></img>
            <img className={s.menuNav__icon} src="theme.svg"></img>
          </div>
        </nav>
      </div>
    </header>
  );
}
