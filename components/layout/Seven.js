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
                Ти станеш впевненим водієм
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                Прокладатимеш свої маршрути на своєму авто
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                Зумієш планувати свій час пересуваючись дорогами
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                Ми навчаємо тільки тому, що стане в нагоді під час водіння!
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                Ти знайдеш друзів, з якими зможеш створювати свої подорожі
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                Ми випускаємо професійних учасників дорожнього руху
              </div>
            </li>
            <li className={s.seven__item}>
              <div className={s.seven__itemText}>
                Після успішного завершення курсу ти складеш теоретичний та
                практичний іспит в ДАІ без проблем
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
