import Image from "next/image";
import s from "../../styles/layout/Seven.module.scss";

export default function Seven() {
  return (
    <section>
      <div className="container">
        <div className="page__sections">
          <h2 className="title__sections">
            <span className="title__base">7 причин</span> чому саме ми?
          </h2>
          <ul>
            <li>Ти станеш впевненим водієм</li>
            <li>Прокладатимеш свої маршрути на своєму авто</li>
            <li>Зумієш планувати свій час пересуваючись дорогами</li>
            <li>Ми навчаємо тільки тому, що стане в нагоді під час водіння!</li>
            <li>Ти знайдеш друзів, з якими зможеш створювати свої подорожі</li>
            <li>Ми випускаємо професійних учасників дорожнього руху</li>
            <li>
              Після успішного завершення курсу ти складеш теоретичний та
              практичний іспит в ДАІ без проблем
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
