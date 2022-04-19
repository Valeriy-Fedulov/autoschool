import Image from "next/image";
import s from "../styles/components/LogoTitle.module.scss";

export default function LogoTitle() {
  return (
    // <div className={s.title__nav}>
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
          />
        </div>
        <p className={s.location__city}>
          м. Ужгород
          <span className={s.location__street}> вул. Підгірна, 28</span>
        </p>
      </div>
    </div>
    // </div>
  );
}
