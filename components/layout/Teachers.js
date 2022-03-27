import Image from "next/image";
import s from "../../styles/layout/Teachers.module.scss";

export default function Teachers() {
  return (
    <section>
      <div className="container">
        <div className="page__sections">
          <h2 className="title__sections">
            Наші педагогічні <span className="title__base">працівники</span>
          </h2>
          <div className={s.teachers__foto}>
            <Image
              src="/foto/teacher.jpeg"
              width={225}
              height={225}
              alt="Викладач"
              placeholder="bluer"
            ></Image>
          </div>
          <h3 className={s.teachers__name}>Дмитрій Іванов</h3>
          <p className={s.teachers__position}>Теоретичні занятя</p>
          <button className={s.teachers__btn}>Інструктор</button>
        </div>
      </div>
    </section>
  );
}
