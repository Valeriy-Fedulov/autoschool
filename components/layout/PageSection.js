import Image from "next/image";
import s from "../../styles/layout/PageSection.module.scss";

export default function PageSection() {
  return (
    <section>
      <div className="container">
        <div className={s.pagesection__bg}>
          <Image
            alt="Mountains"
            src="/images/background/BG-pagesection.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="bluer"
            priority
          />
        </div>
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
              <div className={s.page_section__shadowBtn}>
                <div className={s.page_section__icon}>
                  <Image
                    src="/list-arrow.svg"
                    width={10}
                    height={10}
                    alt="Email"
                    placeholder="bluer"
                  />
                </div>
              </div>
              <ul className={s.page_section__sublist}>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>1</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>
                      Теоретичний курс
                    </span>{" "}
                    по Правилам дорожнього руху та Основам безпеки дорожнього
                    руху (закріпляючий знання ПДР).
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>2</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>
                      Консультація
                    </span>{" "}
                    викладача.
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>3</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>Водіння</span> в
                    умовах інтенсивного руху по оживленим напрямкам руху
                    автомобілів міста, в тому числі і уроки безпечного водіння
                    автомобіля.
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>4</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>
                      Будова та експлуатація
                    </span>{" "}
                    транспортного засобу.
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>5</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>
                      Водіння з інструктором
                    </span>{" "}
                    (від дому до роботи, від дому до дитячого садка).
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>6</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>Курс</span> “Права
                    та обов’язки водія транспортного засобу”.
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>7</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>Основи</span>{" "}
                    безпеки руху.
                  </p>
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
              <ul className={s.page_section__sublist}>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>1</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>
                      Теоретичний курс
                    </span>{" "}
                    по Правилам дорожнього руху та Основам безпеки дорожнього
                    руху (встановлюючи знання ПДР).
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>2</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>
                      Консультація
                    </span>{" "}
                    викладача.
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>3</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>Курс</span> “Права
                    та обов’язки водія транспортного засобу”.
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>4</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>
                      Заняття по водінню
                    </span>{" "}
                    (водіння в умовах інтенсивного руху по оживленим напрямкам
                    руху автомобілів міста), в тому числі і уроки безпечного
                    водіння автомобіля.
                  </p>
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
              <ul className={s.page_section__sublist}>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>1</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>
                      Теоретичний курс
                    </span>{" "}
                    по Правилам дорожнього руху та Основам безпеки дорожнього
                    руху (встановлюючи знання ПДР).
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>2</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>
                      Консультація
                    </span>{" "}
                    викладача.
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>3</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>Курс</span> “Права
                    та обов’язки водія транспортного засобу”.
                  </p>
                </li>
                <li className={s.page_section__subtext}>
                  <div className={s.page_section__subbull}>4</div>
                  <p className={s.page_section__subp}>
                    <span className={s.page_section__subitem}>
                      Заняття по водінню
                    </span>{" "}
                    (водіння в умовах інтенсивного руху по оживленим напрямкам
                    руху автомобілів міста), в тому числі і уроки безпечного
                    водіння автомобіля.
                  </p>
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
