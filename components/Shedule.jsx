import Image from "next/image";
import s from "../styles/components/Shedule.module.scss";

export default function Shedule() {
  return (
    <div className={s.shedule__item}>
      <div className={s.shedule__icon}>
        <Image
          src="/time.svg"
          width={25}
          height={25}
          alt="Іконка годинник"
          placeholder="bluer"
        />
      </div>
      <p className={s.shedule__title}>Пн-Пт 10:00 - 18:00</p>
    </div>
  );
}
