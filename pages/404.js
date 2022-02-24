import Link from "next/link";
import s from "../styles/Error.module.scss";

export default function ErrorPage() {
  return (
    <>
      <h1 className={s.error}>Error 404</h1>
      <p>
        Будь ласка,{" "}
        <Link href={"/"}>
          <a>поверніться</a>
        </Link>{" "}
        на головну сторінку
      </p>
    </>
  );
}
