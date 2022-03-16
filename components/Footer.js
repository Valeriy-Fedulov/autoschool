import s from "../styles/layout/Footer.module.scss";
import Logo from "./Logo";
import LogoCar from "./LogoCar";
import Shedule from "./Shedule";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={s.footer}>
          <Logo />
          <div className={s.footer__shedule}>
            <Shedule />
          </div>
          <div className={s.footer__car}>
            <LogoCar />
          </div>
        </div>
      </div>
    </footer>
  );
}
