import Image from "next/image";
import s from "../styles/components/Social.module.scss";

export default function Social() {
  return (
    <>
      <div className={s.soc__icon}>
        <Image
          src="/viber.svg"
          width={20}
          height={20}
          alt="Viber"
          placeholder="bluer"
        />
      </div>
      <div className={s.soc__icon}>
        <Image
          src="/facebook.svg"
          width={20}
          height={20}
          alt="Facebook"
          placeholder="bluer"
        />
      </div>
      <div className={s.soc__icon}>
        <Image
          src="/email.svg"
          width={20}
          height={20}
          alt="Email"
          placeholder="bluer"
        />
      </div>
    </>
  );
}
