import s from "../styles/layout/header.module.scss";

export function HeaderLayout() {
  return (
    <header>
      <img className={s.logo} src="logo.jpg" width="45"></img>
      <span>УМОУСЦ ТСО України</span>
      <span>Курси водіїв</span>
      <img className={s.location} src="location.svg" width="10"></img>
      <span>м. Ужгород вул. Підгірна, 28</span>
      <img className={s.icon_menu} src="menu.svg"></img>
      <img className={s.icon_menu} src="theme.svg"></img>
      <img className={s.icon_contacts} src="time.svg"></img>
      <span>Пн-Пт 10:00 - 18:00</span>
      <img className={s.icon_contacts} src="phone.svg"></img>
      <p>+ 38 (099)-318-3873 + 38 (066)-088-6500 + 38 (099)-151-7035</p>
      <img className={s.icon_contacts} src="email.svg"></img>
      <span>jaroslavafedulova@gmail.com</span>
      <p>Ласкаво просимо на курси</p>
      <h1>Автошкола</h1>
      <p>Пройди теоретичні та практичні заняття та отримай водійські права </p>
      <button>Записатися онлайн на навчання</button>
      <img className={s.icon_soc} src="viber.svg"></img>
      <img className={s.icon_soc} src="facebook.svg"></img>
      <img className={s.icon_soc} src="email.svg"></img>
      <img className={s.icon_title} src="header-title.svg"></img>
      <h3>Ми навчаємо з гарантією!</h3>
      <p>
        ТЕОРЕТИЧНІ ЗАНЯТТЯ стаціонарно та онлайн. ПРАКТИЧНІ ЗАНЯТТЯ -
        ІНДИВІДУАЛЬНО З КОЖНИМ. Онлайн тести на сайті pdr.auto-tso.com
      </p>
    </header>
  );
}
