import Image from "next/image";
import s from "../styles/components/Shedule.module.scss";
import LogoCar from "./LogoCar";

export default function Shedule() {
  return (
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
        <span className={s.shedule__title}>jaroslavafedulova@gmail.com</span>
      </div>
    </div>
  );
}
