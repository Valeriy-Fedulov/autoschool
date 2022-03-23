import Image from "next/image";
import s from "../../styles/layout/Education.module.scss";

export default function Education() {
  return (
    <section>
      <div className="container">
        <div className={s.education__bg}>
          <Image
            alt="Mountains"
            src="/images/background/BG-education.jpeg"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="bluer"
            priority
          />
        </div>
        <div className="page__sections">
          <h2 className="title__sections">
            <span className="title__base">Навчання в автошколі</span> - це
            круто?
          </h2>
          <ul className={s.education__list}>
            <li className={s.education__item}>
              <span className={s.education__li}>&#10004; -</span> Теоретичний
              курс по Правилам дорожнього руху, основ безпеки дорожнього руху,
              будова та експлуатація транспортного засобу
            </li>
            <li className={s.education__item}>
              <span className={s.education__li}>&#10004; -</span> Практичне
              водіння як на особистому майданчику, так і по Ужгороду та
              Ужгородському р-ну
            </li>
            <li className={s.education__item}>
              <span className={s.education__li}>&#10004; -</span> Заняття в
              комп’ютерному класі з використанням сучасних методів навчання
            </li>
            <li className={s.education__item}>
              <span className={s.education__li}>&#10004; -</span> Заняття з
              інструктором по контрольному маршруту ДАІ
            </li>
            <li className={s.education__item}>
              <span className={s.education__li}>&#10004; -</span> Додаткові
              заняття по водінню
            </li>
            <li className={s.education__item}>
              <span className={s.education__li}>&#10004; -</span> Індивідуальний
              підхід
            </li>
            <li className={s.education__item}>
              <span className={s.education__li}>&#10004; -</span> Можливість
              обрати зручний час навчання
            </li>
          </ul>
          <button className="btn">Записатися онлайн на навчання</button>
        </div>
      </div>
    </section>
  );
}
