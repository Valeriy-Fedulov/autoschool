import Image from "next/image";
import s from "../styles/components/Phone.module.scss";

export default function Phone({ img = true }) {
  return (
    <div className={s.phone__item}>
      {img && (
        <div className={s.phone__icon}>
          <Image
            src="/phone.svg"
            width={25}
            height={25}
            alt="Іконка телефон"
            placeholder="bluer"
          />
        </div>
      )}
      <div className={s.phone__title}>
        <p>
          + 38 (099)<span className={s.phone__number_one}>-318-</span>3873
        </p>
        <p>+ 38 (066)-088-6500</p>
        <p>
          + 38 (099)<span className={s.phone__number_three}>-151-</span>
          7035
        </p>
      </div>
    </div>
  );
}
