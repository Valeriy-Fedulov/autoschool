import Image from "next/image";
import s from "../styles/layout/Hero.module.scss";
import LogoCar from "./LogoCar";
import Shedule from "./Shedule";
import Social from "./Social";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className={s.shedule__contacts}>
          <LogoCar />
          <Shedule />
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
          <h1 className={s.title__hero}>Автошкола2</h1>
          <p className={s.title__lessons}>
            Пройди теоретичні та практичні заняття та отримай водійські права
          </p>
          <button className={s.btn}>Записатися онлайн на навчання</button>
          <div className={s.hero__soc}>
            <Social />
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
