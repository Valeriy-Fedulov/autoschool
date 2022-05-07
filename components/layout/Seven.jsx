import Image from "next/image";
import s from "../../styles/layout/Seven.module.scss";

export default function Seven() {
  return (
    <section>
      <div className="container">
        <div className={s.seven__bg}>
          <Image
            alt="Mountains"
            src="/images/background/BG-seven.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="bluer"
            priority
          />
        </div>
        <div className="page__sections">
          <h2 className="title__sections">
            <span className="title__base">7 причин</span> чому саме ми?
          </h2>
          <ul className={s.seven__list}>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                <div className={s.seven__icon}>
                  <Image
                    src="/icons-seven/icons1.svg"
                    width={50}
                    height={50}
                    alt="Стрілка"
                    placeholder="bluer"
                  />
                </div>
                <div className={s.seven__itemCenter}>
                  Ти станеш впевненим водієм
                </div>
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                <div className={s.seven__icon}>
                  <Image
                    src="/icons-seven/icons2.svg"
                    width={50}
                    height={50}
                    alt="Стрілка"
                    placeholder="bluer"
                  />
                </div>
                <div className={s.seven__itemCenter}>
                  Прокладатимеш свої маршрути на своєму авто
                </div>
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                <div className={s.seven__icon}>
                  <Image
                    src="/icons-seven/icons3.svg"
                    width={50}
                    height={50}
                    alt="Стрілка"
                    placeholder="bluer"
                  />
                </div>
                <div className={s.seven__itemCenter}>
                  Зумієш планувати свій час пересуваючись дорогами
                </div>
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                <div className={s.seven__icon}>
                  <Image
                    src="/icons-seven/icons4.svg"
                    width={50}
                    height={50}
                    alt="Стрілка"
                    placeholder="bluer"
                  />
                </div>
                <div className={s.seven__itemCenter}>
                  Ми навчаємо тільки тому, що стане в нагоді під час водіння!
                </div>
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                <div className={s.seven__icon}>
                  <Image
                    src="/icons-seven/icons5.svg"
                    width={50}
                    height={50}
                    alt="Стрілка"
                    placeholder="bluer"
                  />
                </div>
                <div className={s.seven__itemCenter}>
                  Ти знайдеш друзів, з якими зможеш створювати свої подорожі
                </div>
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                <div className={s.seven__icon}>
                  <Image
                    src="/icons-seven/icons6.svg"
                    width={50}
                    height={50}
                    alt="Стрілка"
                    placeholder="bluer"
                  />
                </div>
                <div className={s.seven__itemCenter}>
                  Ми випускаємо професійних учасників дорожнього руху
                </div>
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                <div className={s.seven__icon}>
                  <Image
                    src="/icons-seven/icons7.svg"
                    width={50}
                    height={50}
                    alt="Стрілка"
                    placeholder="bluer"
                  />
                </div>
                <div className={s.seven__itemCenter}>
                  Після успішного завершення курсу ти складеш теоретичний та
                  практичний іспит в ДАІ без проблем
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="hr__shadow"></div>
      </div>
    </section>
  );
}
