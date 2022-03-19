import Image from "next/image";
import s from "../../styles/layout/Course.module.scss";

export default function Course() {
  return (
    <section>
      <div className="container">
        <h2>
          Чому наш курс? <span>Все просто!</span>
        </h2>
        <ul>
          <li>
            Тривалість навчання в залежності від категорії від 2 тижнів до 3
            місяців.
          </li>
          <li>Наявність інтенсивної програми.</li>
          <li>Можливість безкоштовно повторно відвідати любу лекцію.</li>
          <li>Вибір місця відвідування занять.</li>
          <li>Вибір графіка відвідування занять.</li>
          <li>Вибір форми навчання.</li>
          <li>
            При неможливості відвідування якої небуть лекції по ПДР -
            безкоштовне відвідування пропущеної лекції, допомога в складанні
            індивідуального графіка лекцій.
          </li>
          <li>
            Особливості навчання - примінення сучасних технічних засобів, в т.ч.
            засобів інтерактивного моделювання ситуації.
          </li>
          <li>Навчання із врахуванням жіночої психології.</li>
          <li>
            Кількість занять по водінню визначається з врахуванням наявності
            навиків та індивідуальних здібностей.
          </li>
          <li>
            Водіння в різних районах Ужгорода та Ужгородського району -
            можливість комбінувати, наприклад: водіння поруч з проживанням,
            роботою.
          </li>
          <li>
            Гарантія на навчання*{" "}
            <span>
              * Безкоштовне повторне навчання на протязі року по бажанню слухача
              в залежності від результату здачі екзамену.
            </span>
          </li>
          <li>
            Обов’язкове проходження викладачами та інструкторами з практичного
            керування автомобіля підвищення кваліфікації
          </li>
          <li>
            Здача екзаменів в ДАІ - в зручний Вам день та час зразу після
            закінчення курсів.
          </li>
          <li>Безкоштовні консультації з викладачем по ПДР.</li>
          <li>
            Практичні заняття з інструктором по контрольному маршруту ДАІ.
          </li>
        </ul>
        <button>Записатися онлайн на навчання</button>
      </div>
    </section>
  );
}
