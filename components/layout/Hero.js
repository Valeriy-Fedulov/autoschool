import Image from "next/image";
import s from "../../styles/layout/Hero.module.scss";
import LogoCar from "../LogoCar";
import LogoImg from "../LogoImg";
import Shedule from "../Shedule";
import Social from "../Social";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className={s.shedule__contacts}>
          <LogoCar />
          <Shedule />
        </div>
        <div className={s.section__autoschool}>
          <p className={s.title__course}>Ласкаво просимо на курси</p>
          <h1 className={s.title__hero}>Автошкола</h1>

          <div className={s.hero__title}>
            <p className={s.title__text}>
              Пройди теоретичні та практичні заняття та отримай водійські права
            </p>
          </div>
          <button className={`btn ${s.btn__margin}`}>
            Записатися онлайн на навчання
          </button>
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
                  />
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
        <div className={s.bg}>
          <div className={s.bg__img}>
            <Image
              src="/images/background/header-background320.png"
              width={960}
              height={723}
              quality={100}
              alt="Фон автомобіль"
              placeholder="bluer"
            />
          </div>
          <div className={s.hero__soc}>
            <Social />
          </div>
        </div>
      </div>
    </section>
  );
}
