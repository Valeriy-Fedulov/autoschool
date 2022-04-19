import Image from "next/image";
import s from "../styles/components/Shedule.module.scss";

export default function Shedule() {
  return (
    <div className={s.shedule}>
      <div className={s.shedule__item}>
        <div className={s.shedule__icon}>
          <Image
            src="/time.svg"
            width={15}
            height={15}
            alt="Іконка годинник"
            placeholder="bluer"
          />
        </div>
        <p className={s.shedule__title}>Пн-Пт 10:00 - 18:00</p>
      </div>
      <div className={s.shedule__item}>
        <div className={s.shedule__icon}>
          <Image
            src="/phone.svg"
            width={15}
            height={15}
            alt="Іконка телефон"
            placeholder="bluer"
          />
        </div>
        <div className={s.shedule__item}>
          <div className={s.shedule__title}>
            <p>
              + 38 (099)<span className={s.shedule__number_one}>-318-</span>3873
            </p>
            <p>+ 38 (066)-088-6500</p>
            <p>
              + 38 (099)<span className={s.shedule__number_three}>-151-</span>
              7035
            </p>
          </div>
        </div>
      </div>
      <div className={s.shedule__item}>
        <div className={s.shedule__icon}>
          <Image
            src="/email.svg"
            width={15}
            height={15}
            alt="Іконка електронна пошта"
            placeholder="bluer"
          />
        </div>
        <p className={s.shedule__title}>jaroslavafedulova@gmail.com</p>
      </div>
    </div>
  );
}
