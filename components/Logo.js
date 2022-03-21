import Image from "next/image";
import s from "../styles/components/Logo.module.scss";

export default function Logo() {
  return (
    <div className={s.logo}>
      <div className={s.logo__img}>
        <Image
          src="/images/logo/logo.png"
          width={45}
          height={63}
          alt="Логотип ТСО України"
          placeholder="bluer"
        ></Image>
      </div>
      <div className={s.title}>
        <p className={s.title__organization}>УМОУСЦ ТСО України</p>
        <p className={s.title__courses}>Курси водіїв</p>
        <div className={s.location}>
          <div className={s.location__icon}>
            <Image
              src="/location.svg"
              width={10}
              height={10}
              alt="Іконка локація"
              placeholder="bluer"
            ></Image>
          </div>
          <p className={s.location__city}>
            м. Ужгород
            <span className={s.location__street}> вул. Підгірна, 28</span>
          </p>
        </div>
      </div>
    </div>
  );
}
