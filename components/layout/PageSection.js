import Image from "next/image";
import s from "../../styles/layout/PageSection.module.scss";

export default function PageSection() {
  return (
    <section>
      <div className="container">
        <div className="page__sections">
          <h2 className="title__sections">
            <span className="title__base">Що я можу отримати</span> із
            додаткових навчальних програм?
          </h2>
          <ul>
            <li>
              <h3>
                ПРОГРАМА НАВЧАННЯ ДЛЯ ОСІБ - що отримали водійські посвідчення.
              </h3>
              Але почувають себе невпевнено в умовах інтенсивного міського руху.
              <ol>
                <li>
                  <span>Теоретичний курс</span> по Правилам дорожнього руху та
                  Основам безпеки дорожнього руху (закріпляючий знання ПДР).
                </li>
                <li>
                  <span>Консультація</span> викладача.
                </li>
                <li>
                  <span>Водіння</span> в умовах інтенсивного руху по оживленим
                  напрямкам руху автомобілів міста, в тому числі і уроки
                  безпечного водіння автомобіля.
                </li>
                <li>
                  <span>Будова та експлуатація</span> транспортного засобу.
                </li>
                <li>
                  <span>Водіння з інструктором</span> (від дому до роботи, від
                  дому до дитячого садка).
                </li>
                <li>
                  <span>Курс</span> “Права та обов’язки водія транспортного
                  засобу”.
                </li>
                <li>
                  <span>Основи</span> безпеки руху.
                </li>
              </ol>
            </li>
            <li>
              ПРОГРАМА НАВЧАННЯ ДЛЯ ОСІБ - що мають навики водіння автомобіля
              літом. <span>Але не мають практики водіння в зимовий час.</span>
              <ol>
                <li>
                  <span>Теоретичний курс</span> по Правилам дорожнього руху та
                  Основам безпеки дорожнього руху (встановлюючи знання ПДР).
                </li>
                <li>
                  <span>Консультація</span> викладача.
                </li>
                <li>
                  <span>Курс</span> “Права та обов’язки водія транспортного
                  засобу”.
                </li>
                <li>
                  <span>Заняття по водінню</span> (водіння в умовах інтенсивного
                  руху по оживленим напрямкам руху автомобілів міста), в тому
                  числі і уроки безпечного водіння автомобіля.
                </li>
              </ol>
            </li>
            <li>
              ПРОГРАМА НАВЧАННЯ ДЛЯ ОСІБ - що мають психологічні труднощі.
              <span>При керуванні автомобілем у міському потоці.</span>
              <ol>
                <li>
                  <span>Теоретичний курс</span> по Правилам дорожнього руху та
                  Основам безпеки дорожнього руху (встановлюючи знання ПДР).
                </li>
                <li>
                  <span>Консультація</span> викладача.
                </li>
                <li>
                  <span>Курс</span> “Права та обов’язки водія транспортного
                  засобу”.
                </li>
                <li>
                  <span>Заняття по водінню</span> (водіння в умовах інтенсивного
                  руху по оживленим напрямкам руху автомобілів міста), в тому
                  числі і уроки безпечного водіння автомобіля.
                </li>
              </ol>
            </li>
          </ul>
          <button className="btn">Записатися онлайн на навчання</button>
        </div>
      </div>
    </section>
  );
}
