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
          <h3>Дмитрій Іванов</h3>
          <p>Теорітичні занятя</p>
          <button>Інструктор</button>
        </div>
      </div>
    </section>
  );
}
