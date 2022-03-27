import Image from "next/image";
import s from "../../styles/layout/Footer.module.scss";
import LogoImg from "../LogoImg";
import LogoCar from "../LogoCar";
import Shedule from "../Shedule";
import Social from "../Social";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="hr__shadow"></div>
      <div className={`container ${s.footer__bg}`}>
        <div className={s.footer__padding}>
          <div className={s.footer__logo}>
            <LogoImg />
          </div>
          <div className={s.footer__shedule}>
            <Shedule />
          </div>
          <div className={s.footer__car}>
            <LogoCar />
          </div>
          <div className={s.copyright}>
            <div className={s.copyright__line}></div>
            <p className={s.copyright__title}>
              Copyright © 2022 УМОУСЦ ТСО України. All rights reserved
            </p>
            <div className={s.copyright__line}></div>
          </div>
          <div className={s.footer__soc}>
            <Social />
          </div>
          <button className={s.footer__btnshadow}>
            <div className={s.footer__btnscroll}>
              <Image
                src="/scroll-top.svg"
                width={15}
                height={15}
                alt="Прокрутка"
                placeholder="bluer"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="hr__shadow"></div>
    </footer>
  );
}
