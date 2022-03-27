import Image from "next/image";
import s from "../styles/components/LogoImg.module.scss";

export default function LogoImg() {
  return (
    <div className={s.logo__img}>
      <Image
        src="/images/logo/logo.png"
        width={45}
        height={63}
        quality={100}
        alt="Логотип ТСО України"
        placeholder="bluer"
      />
    </div>
  );
}
