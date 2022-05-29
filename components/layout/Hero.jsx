import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import s from "../../styles/layout/Hero.module.scss";
import LogoCar from "../LogoCar";
import Shedule from "../Shedule";
import Phone from "../Phone";
import Email from "../Email";
import Social from "../Social";
import Button from "../Button";

export default function Hero() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section>
      <div className="container">
        <div className="page__sections">
          <div className={s.heroContact__wrapper}>
            <div className={s.logocar__wrapper}>
              <LogoCar />
            </div>
            <div className={s.shedule__wrapper}>
              <Shedule />
            </div>
            <div className={s.phone__wrapper}>
              <Phone />
            </div>
            <div className={s.email__wrapper}>
              <Email />
            </div>
          </div>

          <div className={s.hero__wrapper}>
            <p className={s.title__course}>Ласкаво просимо на курси</p>
            <h1 className={s.title__hero}>Автошкола</h1>

            <p className={s.title__text}>
              Пройди теоретичні та практичні заняття та отримай водійські права
            </p>

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

            <button className={`btn ${s.btn__wrapper}`}>
              Записатися онлайн на навчання
            </button>

            <div className={s.hero__soc}>
              <Social />
            </div>

            <div className={s.guarantee__border}>
              <div className={s.guarantee__btn}>
                <div className={s.guarantee__icon}>
                  <Image
                    src="/header-title.svg"
                    width={40}
                    height={40}
                    alt="Guarantee"
                    placeholder="bluer"
                  />
                </div>
              </div>
            </div>

            <div className={s.guarantee}>
              <h3 className={s.guarantee__title}>Ми навчаємо з гарантією!</h3>
              <p className={s.guarantee__text}>
                Теоретичні заняття стаціонарно та онлайн. Практичні заняття -
                індивідуально з кожним. Онлайн тести на сайті pdr.auto-tso.com
              </p>
            </div>
          </div>
        </div>

        {isDesktop && (
          <div className={s.consult__wrapper}>
            <button className={s.consult__btnShadow}>
              <div className={s.consult__btn}>
                <div className={s.consult__btnIcon}>
                  <Image
                    src="/consult.svg"
                    width={40}
                    height={40}
                    alt="Консультація"
                    placeholder="bluer"
                  />
                </div>
              </div>
            </button>
            <p className={s.consult__text}>безкоштовна консультація</p>
          </div>
        )}
        <div className="hr__shadow"></div>
      </div>
    </section>
  );
}
