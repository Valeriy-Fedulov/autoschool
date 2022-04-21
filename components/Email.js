import Image from "next/image";
import s from "../styles/components/Email.module.scss";

export default function Email() {
  return (
    <div className={s.email__item}>
      <div className={s.email__icon}>
        <Image
          src="/email.svg"
          width={15}
          height={15}
          alt="Іконка електронна пошта"
          placeholder="bluer"
        />
      </div>
      <p className={s.email__title}>jaroslavafedulova@gmail.com</p>
    </div>
  );
}
