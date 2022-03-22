import Image from "next/image";
import s from "../../styles/layout/Program.module.scss";

export default function Program() {
  return (
    <section>
      <div className="container">
        <div className="page__sections">
          <h2 className="title__sections">
            <span className="title__base">Програма навчання</span>
          </h2>
          <p>
            Прості етапи як проходить навчання у нашій автошколі до отримання
            посвідчення водія
          </p>
          <ol>
            <li>
              ЗАПИС В АВТОШКОЛУ. Записатися в нашу автошколу за телефоном або
              прийти та оформити все на місці
            </li>
            <li>
              ВИВЧЕННЯ ТЕОРІЇ. Зручна система вивчення теоретичної частини
              дозволяє навчатися як у класі, так і онлайн, а також можливість
              самостійного проходження теоретичної частини під керівництвом
              викладача
            </li>
            <li>
              САМОСТІЙНА ПІДГОТОВКА. Безкоштовний доступ до проходження курсу
              самостійної підготовки водіїв pdr.auto-tsou.com (рекомендується
              для слухачів, що періодично пропускають заняття для самостійного
              опрацювання пропущених тем)
            </li>
            <li>
              ПРАКТИЧНЕ ВОДІННЯ. Найбільш ефективний спосіб навчання це
              закріплення теорії спільно з практикою в місті, що дозволяє
              набагато швидше освоїти нові знання
            </li>
            <li>
              ВНУТРІШНІЙ ІСПИТ. При складанні внутрішнього іспиту, ми
              перевіряємо теорію та практику водіння, що дозволяє Вам впевнено
              скласти іспит в ДАІ
            </li>
            <li>
              ІСПИТ ТЕОРІЇ В ДАІ. Складаєте іспит теорії для отримання прав
              категорії безпосередньо в ДАІ
            </li>
            <li>
              ІСПИТ З ПРАКТИЧНОГО ВОДІННЯ В ДАІ. Складаєте практичний іспит на
              майданчику
            </li>
            <li>
              ОТРИМАННЯ ПОСВІДЧЕННЯ ВОДІЯ. Після успішного складання всіх
              іспитів отримуєте посвідчення водія
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}