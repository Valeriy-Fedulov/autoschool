import Image from "next/image";
import s from "../styles/components/Social.module.scss";

export default function Social() {
  return (
    <>
      <div className={s.soc__icon}>
        <Image
          src="/viber.svg"
          width={15}
          height={15}
          alt="Viber"
          placeholder="bluer"
        ></Image>
      </div>
      <div className={s.soc__icon}>
        <Image
          src="/facebook.svg"
          width={15}
          height={15}
          alt="Facebook"
          placeholder="bluer"
        ></Image>
      </div>
      <div className={s.soc__icon}>
        <Image
          src="/email.svg"
          width={15}
          height={15}
          alt="Email"
          placeholder="bluer"
        ></Image>
      </div>
    </>
  );
}
