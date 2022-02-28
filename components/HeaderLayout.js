import s from "../styles/layout/header.module.scss";

export function HeaderLayout() {
  return (
    <header>
      <img className={s.logo} src="logo.jpg" width="45"></img>
      <span>УМОУСЦ ТСО України</span>
      <span>Курси водіїв</span>
      <img src="location.svg" width="10"></img>
      <span>м. Ужгород вул. Підгірна, 28</span>
      <p>
        Пн-Пт 10:00 - 18:00 + 38 (099)-318-3873 + 38 (066)-088-6500 + 38
        (099)-151-7035 jaroslavafedulova@gmail.com
      </p>
      <p>Ласкаво просимо на курси</p>
      <h1>Автошкола</h1>
      <p>Пройди теоретичні та практичні заняття та отримай водійські права </p>
      <h3>Ми навчаємо з гарантіею!</h3>
      <p>
        ТЕОРЕТИЧНІ ЗАНЯТТЯ стаціонарно та онлайн. ПРАКТИЧНІ ЗАНЯТТЯ -
        ІНДИВІДУАЛЬНО З КОЖНИМ. Онлайн тести на сайті pdr.auto-tso.com
      </p>
    </header>
  );
}
