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
          <ul className={s.page_section__list}>
            <li>
              <p className={s.page_section__item}>
                <span className={s.page_section__bull}>&bull;</span> ПРОГРАМА
                НАВЧАННЯ ДЛЯ ОСІБ - що отримали водійські посвідчення.{" "}
                <span className={s.page_section__text}>
                  Але почувають себе невпевнено в умовах інтенсивного міського
                  руху.
                </span>
              </p>
              <ul>
                <li>
                  <div className={s.page_section__subbull}>1</div>
                  <span className={s.page_section__subitem}>
                    Теоретичний курс
                  </span>{" "}
                  по Правилам дорожнього руху та Основам безпеки дорожнього руху
                  (закріпляючий знання ПДР).
                </li>
                <li>
                  <span className={s.page_section__subitem}>Консультація</span>{" "}
                  викладача.
                </li>
                <li>
                  <span className={s.page_section__subitem}>Водіння</span> в
                  умовах інтенсивного руху по оживленим напрямкам руху
                  автомобілів міста, в тому числі і уроки безпечного водіння
                  автомобіля.
                </li>
                <li>
                  <span className={s.page_section__subitem}>
                    Будова та експлуатація
                  </span>{" "}
                  транспортного засобу.
                </li>
                <li>
                  <span className={s.page_section__subitem}>
                    Водіння з інструктором
                  </span>{" "}
                  (від дому до роботи, від дому до дитячого садка).
                </li>
                <li>
                  <span className={s.page_section__subitem}>Курс</span> “Права
                  та обов’язки водія транспортного засобу”.
                </li>
                <li>
                  <span className={s.page_section__subitem}>Основи</span>{" "}
                  безпеки руху.
                </li>
              </ul>
            </li>
            <li>
              <p className={s.page_section__item}>
                <span className={s.page_section__bull}>&bull;</span> ПРОГРАМА
                НАВЧАННЯ ДЛЯ ОСІБ - що мають навики водіння автомобіля літом.{" "}
                <span className={s.page_section__text}>
                  Але не мають практики водіння в зимовий час.
                </span>
              </p>
              <ul>
                <li>
                  <span className={s.page_section__subitem}>
                    Теоретичний курс
                  </span>{" "}
                  по Правилам дорожнього руху та Основам безпеки дорожнього руху
                  (встановлюючи знання ПДР).
                </li>
                <li>
                  <span className={s.page_section__subitem}>Консультація</span>{" "}
                  викладача.
                </li>
                <li>
                  <span className={s.page_section__subitem}>Курс</span> “Права
                  та обов’язки водія транспортного засобу”.
                </li>
                <li>
                  <span className={s.page_section__subitem}>
                    Заняття по водінню
                  </span>{" "}
                  (водіння в умовах інтенсивного руху по оживленим напрямкам
                  руху автомобілів міста), в тому числі і уроки безпечного
                  водіння автомобіля.
                </li>
              </ul>
            </li>
            <li>
              <p className={s.page_section__item}>
                <span className={s.page_section__bull}>&bull;</span> ПРОГРАМА
                НАВЧАННЯ ДЛЯ ОСІБ - що мають психологічні труднощі.{" "}
                <span className={s.page_section__text}>
                  При керуванні автомобілем у міському потоці.
                </span>
              </p>
              <ul>
                <li>
                  <span className={s.page_section__subitem}>
                    Теоретичний курс
                  </span>{" "}
                  по Правилам дорожнього руху та Основам безпеки дорожнього руху
                  (встановлюючи знання ПДР).
                </li>
                <li>
                  <span className={s.page_section__subitem}>Консультація</span>{" "}
                  викладача.
                </li>
                <li>
                  <span className={s.page_section__subitem}>Курс</span> “Права
                  та обов’язки водія транспортного засобу”.
                </li>
                <li>
                  <span className={s.page_section__subitem}>
                    Заняття по водінню
                  </span>{" "}
                  (водіння в умовах інтенсивного руху по оживленим напрямкам
                  руху автомобілів міста), в тому числі і уроки безпечного
                  водіння автомобіля.
                </li>
              </ul>
            </li>
          </ul>
          <button className="btn">Записатися онлайн на навчання</button>
        </div>
      </div>
    </section>
  );
}
