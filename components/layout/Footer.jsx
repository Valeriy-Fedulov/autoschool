import Image from "next/image";
import s from "../../styles/layout/Footer.module.scss";
import LogoImg from "../LogoImg";
import LogoTitle from "../LogoTitle";
import LogoCar from "../LogoCar";
import Shedule from "../Shedule";
import Phone from "../Phone";
import Email from "../Email";
import Social from "../Social";

export default function Footer() {
  return (
    <footer className={`${s.footer} ${s.footer__bg}`}>
      <div className="hr__shadow hr__top"></div>
      <div className="container">
        <div className={s.footer__wrapper}>
          <div className={s.footer__logo}>
            <LogoImg />
            <LogoTitle />
          </div>

          <div className={s.footer__shedule}>
            <Shedule />
          </div>
          <div className={s.footer__phone}>
            <Phone />
          </div>
          <div className={s.footer__email}>
            <Email />
          </div>
          <div className={s.footer__car}>
            <LogoCar />
          </div>
        </div>

        <button className={s.footer__btnshadow}>
          <div className={s.footer__btnscroll}>
            <div className={s.footer__btnicon}>
              <Image
                src="/scroll-top.svg"
                width={30}
                height={30}
                alt="Прокрутка"
                placeholder="bluer"
              />
            </div>
          </div>
        </button>
      </div>
      <div className={s.copyright}>
        <div className={s.copyright__line}></div>
        <p className={s.copyright__title}>
          Copyright © 2022 УМОУСЦ ТСО України. All rights reserved
        </p>
        <div className={s.copyright__line}></div>
      </div>
      <div className="container">
        <div className={s.footer__soc}>
          <Social />
        </div>
      </div>
      <div className="hr__shadow"></div>
    </footer>
  );
}
