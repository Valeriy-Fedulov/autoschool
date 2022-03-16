import Image from "next/image";
import s from "../styles/layout/hero.module.scss";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className={s.hero__contacts}>
          <div className={s.logo__car}>
            <Image
              src="/images/logo/logo-car.png"
              width={80}
              height={35}
              alt="Логотип автомобіля"
              placeholder="bluer"
            ></Image>
          </div>
          <div className={s.shedule}>
            <div className={s.shedule__item}>
              <div className={s.shedule__icon}>
                <Image
                  src="/time.svg"
                  width={10}
                  height={10}
                  alt="Іконка годинник"
                  placeholder="bluer"
                ></Image>
              </div>
              <span className={s.shedule__title}>Пн-Пт 10:00 - 18:00</span>
            </div>
            <div className={s.shedule__item}>
              <div className={s.shedule__icon}>
                <Image
                  src="/phone.svg"
                  width={10}
                  height={10}
                  alt="Іконка телефон"
                  placeholder="bluer"
                ></Image>
              </div>
              <div className={s.shedule__title}>
                <span>+ 38 (099)-318-3873</span>
                <span>+ 38 (066)-088-6500</span>
                <span>+ 38 (099)-151-7035</span>
              </div>
            </div>
            <div className={s.shedule__item}>
              <div className={s.shedule__icon}>
                <Image
                  src="/email.svg"
                  width={10}
                  height={10}
                  alt="Іконка електронна пошта"
                  placeholder="bluer"
                ></Image>
              </div>
              <span className={s.shedule__title}>
                jaroslavafedulova@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className={s.section__autoschool}>
          <div className={s.bg__img}>
            <Image
              src="/images/background/header-background320.png"
              width={150}
              height={113}
              alt="Фон автомобіль"
              placeholder="bluer"
            ></Image>
          </div>
          <p className={s.title__course}>Ласкаво просимо на курси</p>
          <h1 className={s.title__hero}>Автошкола</h1>
          <p className={s.title__lessons}>
            Пройди теоретичні та практичні заняття та отримай водійські права
          </p>
          <button className={s.btn}>Записатися онлайн на навчання</button>
          <div className={s.soc}>
            <div className={s.soc__icon}>
              <Image
                src="/viber.svg"
                width={15}
                height={15}
                alt="Viber"
                placeholder="bluer"
              ></Image>
            </div>
            <div className={s.soc__icon}>
              <Image
                src="/facebook.svg"
                width={15}
                height={15}
                alt="Facebook"
                placeholder="bluer"
              ></Image>
            </div>
            <div className={s.soc__icon}>
              <Image
                src="/email.svg"
                width={15}
                height={15}
                alt="Email"
                placeholder="bluer"
              ></Image>
            </div>
          </div>
        </div>
        <div className={s.guarantee}>
          <div className={s.guarantee__border}>
            <div className={s.guarantee__btn}>
              <div className={s.guarantee__icon}>
                <Image
                  src="/header-title.svg"
                  width={20}
                  height={20}
                  alt="Email"
                  placeholder="bluer"
                ></Image>
              </div>
            </div>
          </div>
          <div>
            <h3 className={s.guarantee__title}>Ми навчаємо з гарантією!</h3>
            <p className={s.guarantee__text}>
              Теоретичні заняття стаціонарно та онлайн. Практичні заняття -
              індивідуально з кожним. Онлайн тести на сайті pdr.auto-tso.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
