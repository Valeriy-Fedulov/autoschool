import s from "../../styles/layout/Footer.module.scss";
import Logo from "../Logo";
import LogoCar from "../LogoCar";
import Shedule from "../Shedule";
import Social from "../Social";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={s.footer}>
          <div className={s.footer__logo}>
            <Logo />
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
        </div>
      </div>
    </footer>
  );
}
