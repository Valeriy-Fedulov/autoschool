import Image from "next/image";
import s from "../../styles/layout/Program.module.scss";

export default function Program() {
  return (
    <section>
      <div className="container">
        <div className={s.program__bg}>
          <Image
            alt="Mountains"
            src="/images/background/BG-program.jpg"
            layout="fill"
            width={320}
            height={688}
            objectFit="cover"
            quality={100}
            placeholder="bluer"
            priority
          />
        </div>
        <div className="page__sections">
          <h2 className="title__sections">
            <span className="title__base">Програма навчання</span>
          </h2>
          <p className={s.program__text}>
            Прості етапи як проходить навчання у нашій автошколі до отримання
            посвідчення водія
          </p>
          <ol className={s.program__list}>
            <li className={s.program__item}>
              ЗАПИС В АВТОШКОЛУ. Записатися в нашу автошколу за телефоном або
              прийти та оформити все на місці
              <div className={s.program__img}>
                <Image
                  src="/item.svg"
                  width={30}
                  height={35}
                  alt="Стрілка"
                  placeholder="bluer"
                />
              </div>
            </li>
            <li className={s.program__item}>
              ВИВЧЕННЯ ТЕОРІЇ. Зручна система вивчення теоретичної частини
              дозволяє навчатися як у класі, так і онлайн, а також можливість
              самостійного проходження теоретичної частини під керівництвом
              викладача
            </li>
            <li className={s.program__item}>
              САМОСТІЙНА ПІДГОТОВКА. Безкоштовний доступ до проходження курсу
              самостійної підготовки водіїв pdr.auto-tsou.com (рекомендується
              для слухачів, що періодично пропускають заняття для самостійного
              опрацювання пропущених тем)
            </li>
            <li className={s.program__item}>
              ПРАКТИЧНЕ ВОДІННЯ. Найбільш ефективний спосіб навчання це
              закріплення теорії спільно з практикою в місті, що дозволяє
              набагато швидше освоїти нові знання
            </li>
            <li className={s.program__item}>
              ВНУТРІШНІЙ ІСПИТ. При складанні внутрішнього іспиту, ми
              перевіряємо теорію та практику водіння, що дозволяє Вам впевнено
              скласти іспит в ДАІ
            </li>
            <li className={s.program__item}>
              ІСПИТ ТЕОРІЇ В ДАІ. Складаєте іспит теорії для отримання прав
              категорії безпосередньо в ДАІ
            </li>
            <li className={s.program__item}>
              ІСПИТ З ПРАКТИЧНОГО ВОДІННЯ В ДАІ. Складаєте практичний іспит на
              майданчику
            </li>
            <li className={s.program__item}>
              ОТРИМАННЯ ПОСВІДЧЕННЯ ВОДІЯ. Після успішного складання всіх
              іспитів отримуєте посвідчення водія
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
