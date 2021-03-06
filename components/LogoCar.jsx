import Image from "next/image";
import s from "../styles/components/LogoCar.module.scss";

export default function LogoCar() {
  return (
    <div className={s.logo__car}>
      <Image
        src="/images/logo/logo-car.png"
        width={235}
        height={100}
        quality={100}
        alt="Логотип автомобіля"
        placeholder="bluer"
      />
    </div>
  );
}
