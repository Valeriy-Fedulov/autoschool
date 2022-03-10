import s from "../styles/layout/header.module.scss";

export function HeaderLayout() {
  return (
    <header>
      <div className="container">
        <div className={s.page_header}>
          <img className={s.logo} src="images\logo\logo.png" width="45"></img>
          <span className={s.logo_title}>УМОУСЦ ТСО України</span>
          <span className={s.logo_courses}>Курси водіїв</span>
          <img className={s.location} src="location.svg" width="10"></img>
          <span className={s.logo_city}>м. Ужгород</span>
          <span className={s.logo_street}>вул. Підгірна, 28</span>
          <img className={s.icon_menu} src="menu.svg"></img>
          <img className={s.icon_menu} src="theme.svg"></img>
        </div>
        <img className={s.icon_contacts} src="time.svg"></img>
        <span className={s.shedule}>Пн-Пт 10:00 - 18:00</span>
        <img className={s.icon_contacts} src="phone.svg"></img>
        <p className={s.shedule}>
          + 38 (099)-318-3873 + 38 (066)-088-6500 + 38 (099)-151-7035
        </p>
        <img className={s.icon_contacts} src="email.svg"></img>
        <span className={s.shedule}> jaroslavafedulova@gmail.com</span>
        <span className={s.title_course}>Ласкаво просимо на курси</span>
        <h1 className={s.title_hero}>Автошкола</h1>
        <p className={s.title_lessons}>
          Пройди теоретичні та практичні заняття та отримай водійські права
        </p>
        <button className={s.btn}>Записатися онлайн на навчання</button>
        <img className={s.icon_soc} src="viber.svg"></img>
        <img className={s.icon_soc} src="facebook.svg"></img>
        <img className={s.icon_soc} src="email.svg"></img>
        <img className={s.icon_title} src="header-title.svg"></img>
        <h3 className={s.title_guarantee}>Ми навчаємо з гарантією!</h3>
        <p className={s.title_guaran_text}>
          ТЕОРЕТИЧНІ ЗАНЯТТЯ стаціонарно та онлайн. ПРАКТИЧНІ ЗАНЯТТЯ -
          ІНДИВІДУАЛЬНО З КОЖНИМ. Онлайн тести на сайті pdr.auto-tso.com
        </p>
      </div>
    </header>
  );
}
