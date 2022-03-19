import Image from "next/image";
import s from "../../styles/layout/Category.module.scss";

export default function Category() {
  return (
    <section>
      <div className="container">
        <h2>
          Вибери <span>категорію</span>, яку ти хочеш саме зараз
        </h2>
        <h3>
          A<span>1</span>
        </h3>
        <h4>Категорія “А1” - мопед</h4>
        <p>
          Навчання з <span>16 років</span> Тривалість навчання 2 місяці
        </p>
        <ul>
          <li>
            Паспорт 1, 2 сторінка та сторінка прописки (якщо паспорт ID то копії
            двох сторін + витяг про прописку)
          </li>
          <li>Идентифікаційний код</li>
          <li>Медична довідка</li>
          <li>3 фотографії</li>
        </ul>
        <span>2500</span>
        <p>грн за 2 / місяці</p>
        <button>Записатися</button>
      </div>
    </section>
  );
}
