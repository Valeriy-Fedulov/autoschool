import Image from "next/image";
import s from "../../styles/layout/Education.module.scss";

export default function Education() {
  return (
    <section>
      <div className="container">
        <div className="page__sections">
          <h2 className="title__sections">
            <span className="title__base">Навчання в автошколі</span> - це
            круто?
          </h2>
          <ul className={s.education__list}>
            <li className={s.education__item}>
              Теоретичний курс по Правилам дорожнього руху, основ безпеки
              дорожнього руху, будова та експлуатація транспортного засобу
            </li>
            <li>
              Практичне водіння як на особистому майданчику, так і по Ужгороду
              та Ужгородському р-ну
            </li>
            <li>
              Заняття в комп’ютерному класі з використанням сучасних методів
              навчання
            </li>
            <li>Заняття з інструктором по контрольному маршруту ДАІ</li>
            <li>Додаткові заняття по водінню</li>
            <li>Індивідуальний підхід</li>
            <li>Можливість обрати зручний час навчання</li>
          </ul>
          <button className="btn">Записатися онлайн на навчання</button>
        </div>
      </div>
    </section>
  );
}
