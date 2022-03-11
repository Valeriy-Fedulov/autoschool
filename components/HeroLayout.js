import s from "../styles/layout/hero.module.scss";

export function HeroLayout() {
  return (
    <section>
      <div className="container">
        <img
          className={s.bg__img}
          src="images/background/header-background320.png"
        ></img>
        <div className={s.hero__contacts}>
          <img className={s.logo__car} src="images\logo\logo-car.png"></img>
          <div className={s.shedule}>
            <div className={s.shedule__item}>
              <img className={s.shedule__icon} src="time.svg"></img>
              <span className={s.shedule__title}>Пн-Пт 10:00 - 18:00</span>
            </div>
            <div className={s.shedule__item}>
              <img className={s.shedule__icon} src="phone.svg"></img>
              <p className={s.shedule__title}>
                <div className={s.sheduleTitle__items}>
                  <span className={s.phone__item}>+ 38 (099)-318-3873</span>
                  <span>+ 38 (066)-088-6500</span>
                  <span>+ 38 (099)-151-7035</span>
                </div>
              </p>
            </div>
            <div className={s.shedule__item}>
              <img className={s.shedule__icon} src="email.svg"></img>
              <span className={s.shedule__title}>
                jaroslavafedulova@gmail.com
              </span>
            </div>
          </div>
        </div>
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
    </section>
  );
}
