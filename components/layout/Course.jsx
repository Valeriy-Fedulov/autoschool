import Image from "next/image";
import s from "../../styles/layout/Course.module.scss";

export default function Course() {
  return (
    <section>
      <div className="container">
        <div className={s.course__bg}>
          <Image
            alt="Mountains"
            src="/images/background/BG-course.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="bluer"
            priority
          />
        </div>
        <div className="page__sections">
          <h2 className="title__sections">
            Чому наш курс? <span className="title__base">Все просто!</span>
          </h2>
          <ul className={s.course__list}>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Тривалість навчання в залежності від категорії від 2 тижнів до 3
              місяців.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Наявність інтенсивної програми.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Можливість безкоштовно повторно відвідати любу лекцію.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Вибір місця відвідування занять.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Вибір графіка відвідування занять.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Вибір форми навчання.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              При неможливості відвідування якої небуть лекції по ПДР -
              безкоштовне відвідування пропущеної лекції, допомога в складанні
              індивідуального графіка лекцій.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Особливості навчання - примінення сучасних технічних засобів, в
              т.ч. засобів інтерактивного моделювання ситуації.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Навчання із врахуванням жіночої психології.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Кількість занять по водінню визначається з врахуванням наявності
              навиків та індивідуальних здібностей.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Водіння в різних районах Ужгорода та Ужгородського району -
              можливість комбінувати, наприклад: водіння поруч з проживанням,
              роботою.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Гарантія на навчання<span className={s.footnote}>*</span>
              <p className={s.footnote__text}>
                <span className={s.footnote}>*</span> Безкоштовне повторне
                навчання на протязі року по бажанню слухача в залежності від
                результату здачі екзамену.
              </p>
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Обов’язкове проходження викладачами та інструкторами з практичного
              керування автомобіля підвищення кваліфікації
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Здача екзаменів в ДАІ - в зручний Вам день та час зразу після
              закінчення курсів.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Безкоштовні консультації з викладачем по ПДР.
            </li>
            <li className={s.course__item}>
              <div className={s.course__icon}>
                <Image
                  src="/circle-item.svg"
                  width={25}
                  height={25}
                  alt="Пункт"
                  placeholder="bluer"
                />
              </div>
              Практичні заняття з інструктором по контрольному маршруту ДАІ.
            </li>
          </ul>
          <button className="btn">Записатися онлайн на навчання</button>
        </div>
      </div>
    </section>
  );
}
