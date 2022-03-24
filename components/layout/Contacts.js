import Image from "next/image";
import s from "../../styles/layout/Contacts.module.scss";

export default function Contacts() {
  return (
    <section>
      <div className="container">
        <div className="page__sections">
          <h2 className="title__sections">Контакти</h2>
          <p className={s.contacts__title}>Залишились питання?</p>
          <p className={s.contacts__text}>
            Зв’яжіться з нами і ми відповімо на всі ваші запитання
          </p>
          <div className={s.contacts__list}>
            <ul>
              <li>
                <p className={s.contacts__item}>Телефони</p>
                <p className={s.contacts__shedule}>
                  + 38 (099)-318-3873 + 38 (066)-088-6500 + 38 (099)-151-7035
                </p>
              </li>
              <li>
                <p className={s.contacts__item}>Електронна пошта</p>
                <p>jaroslavafedulova@gmail.com</p>
              </li>
              <li>
                <p className={s.contacts__item}>Адреса</p>
                <p>м. Ужгород, вул. Підгірна, 28</p>
              </li>
              <li>
                <p className={s.contacts__item}>Час роботи</p>
                <p>Пн-Пт 10:00 - 18:00</p>
              </li>
            </ul>
            <div className={s.contacts__btn}>
              <button className="btn">Зв’язатися з нами</button>
            </div>
          </div>
        </div>
        <div className="s.contacts__map">
          {/* <div className={s.contacts__bg}>
            <Image
              alt="Mountains"
              src="/images/background/BG-map.jpeg"
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="bluer"
              priority
            />
          </div> */}
          <p className={s.contacts__name}>Федулова Ярослава Іванівна</p>
          <p className={s.contacts__position}>Директор</p>
          <p className={s.contacts__name}>Суддя Михайло Федорович</p>
          <p className={s.contacts__position}>Заступник директора</p>
        </div>
      </div>
    </section>
  );
}
