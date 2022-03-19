import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Link from "next/link";
import s from "../styles/Error.module.scss";

export default function ErrorPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div className="container">
      <div className={s.error}>
        <div className={s.error__section}>
          <h1 className={s.error__title}>Error 404 2</h1>
          <p className={s.error__text}>
            Будь ласка, поверніться на головну сторінку
          </p>
        </div>
      </div>
    </div>
  );
}
