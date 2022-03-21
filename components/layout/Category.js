import Image from "next/image";
import s from "../../styles/layout/Category.module.scss";

export default function Category() {
  return (
    <section>
      <div className="container">
        <div className="page__sections">
          <h2 className="title__sections">
            Вибери <span className="title__base">категорію</span>, яку ти хочеш
            саме зараз
          </h2>
          <div className={s.card}>
            <h3 className={s.card__category}>
              <span className={s.card__subcategory}>A</span>1
            </h3>
            <h4 className={s.card__title}>Категорія “А1” - мопед</h4>
            <p className={s.card__text}>
              Навчання з <span className={s.card__subtext}>16 років</span>{" "}
              Тривалість навчання 2 місяці
            </p>
            <ul className={s.card__items}>
              <li>
                Паспорт 1, 2 сторінка та сторінка прописки (якщо паспорт ID то
                копії двох сторін + витяг про прописку)
              </li>
              <li>Идентифікаційний код</li>
              <li>Медична довідка</li>
              <li>3 фотографії</li>
            </ul>
            <div className={s.price}>
              <p className={s.price__course}>2500</p>
              <p className={s.price__text}>
                грн
                <br /> за 2 / місяці
              </p>
            </div>
            <button className="btn">Записатися</button>
          </div>
        </div>
      </div>
    </section>
  );
}
