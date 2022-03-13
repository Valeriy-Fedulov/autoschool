import s from "../styles/layout/hero.module.scss";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className={s.hero__contacts}>
          <img className={s.logo__car} src="images\logo\logo-car.png"></img>
          <div className={s.shedule}>
            <div className={s.shedule__item}>
              <img className={s.shedule__icon} src="time.svg"></img>
              <span className={s.shedule__title}>Пн-Пт 10:00 - 18:00</span>
            </div>
            <div className={s.shedule__item}>
              <img className={s.shedule__icon} src="phone.svg"></img>
              <div className={s.shedule__title}>
                <span>+ 38 (099)-318-3873</span>
                <span>+ 38 (066)-088-6500</span>
                <span>+ 38 (099)-151-7035</span>
              </div>
            </div>
            <div className={s.shedule__item}>
              <img className={s.shedule__icon} src="email.svg"></img>
              <span className={s.shedule__title}>
                jaroslavafedulova@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className={s.section__autoschool}>
          <img
            className={s.bg__img}
            src="images/background/header-background320.png"
          ></img>
          <p className={s.title__course}>Ласкаво просимо на курси</p>
          <h1 className={s.title__hero}>Автошкола</h1>
          <p className={s.title__lessons}>
            Пройди теоретичні та практичні заняття та отримай водійські права
          </p>
          <button className={s.btn}>Записатися онлайн на навчання</button>
          <div className={s.soc}>
            <img className={s.soc__icon} src="viber.svg"></img>
            <img className={s.soc__icon} src="facebook.svg"></img>
            <img className={s.soc__icon} src="email.svg"></img>
          </div>
        </div>
        <button className={s.btn__guarantee}>
          <img className={s.guarantee__icon} src="header-title.svg"></img>
        </button>
        <h3 className={s.guarantee__title}>Ми навчаємо з гарантією!</h3>
        <p className={s.guarantee_text}>
          ТЕОРЕТИЧНІ ЗАНЯТТЯ стаціонарно та онлайн. ПРАКТИЧНІ ЗАНЯТТЯ -
          ІНДИВІДУАЛЬНО З КОЖНИМ. Онлайн тести на сайті pdr.auto-tso.com
        </p>
      </div>
    </section>
  );
}
