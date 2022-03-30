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
                <div className={s.contacts__itemIcon}>
                  <div className={s.contacts__icon}>
                    <Image
                      src="/phone.svg"
                      width={15}
                      height={15}
                      alt="Іконка телефон"
                      placeholder="bluer"
                    />
                  </div>
                  <p className={s.contacts__item}>Телефони</p>
                </div>
                <p className={s.contacts__shedule}>
                  + 38 (099)-318-3873 + 38 (066)-088-6500 + 38 (099)-151-7035
                </p>
              </li>
              <li>
                <div className={s.contacts__itemIcon}>
                  <div className={s.contacts__icon}>
                    <Image
                      src="/email.svg"
                      width={15}
                      height={15}
                      alt="Іконка електронна пошта"
                      placeholder="bluer"
                    />
                  </div>
                  <p className={s.contacts__item}>Електронна пошта</p>
                </div>
                <p>jaroslavafedulova@gmail.com</p>
              </li>
              <li>
                <div className={s.contacts__itemIcon}>
                  <div className={s.contacts__icon}>
                    <Image
                      src="/location.svg"
                      width={15}
                      height={15}
                      alt="Іконка локація"
                      placeholder="bluer"
                    />
                  </div>
                  <p className={s.contacts__item}>Адреса</p>
                </div>
                <p>м. Ужгород, вул. Підгірна, 28</p>
              </li>
              <li>
                <div className={s.contacts__itemIcon}>
                  <div className={s.contacts__icon}>
                    <Image
                      src="/time.svg"
                      width={15}
                      height={15}
                      alt="Іконка годинник"
                      placeholder="bluer"
                    />
                  </div>
                  <p className={s.contacts__item}>Час роботи</p>
                </div>
                <p>Пн-Пт 10:00 - 18:00</p>
              </li>
            </ul>
            <div className={s.contacts__btn}>
              <button className="btn">Зв’язатися з нами</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={s.contacts__shadow1}></div>
        <div className={s.contacts__shadow2}></div>
        <div className={s.contacts__bg}>
          <Image
            alt="Mountains"
            src="/images/background/BG-map.jpeg"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="bluer"
            priority
          />
        </div>
        <div className={s.contacts__map}>
          <p className={s.contacts__name}>Федулова Ярослава Іванівна</p>
          <p className={s.contacts__position}>Директор</p>
          <p className={s.contacts__name}>Суддя Михайло Федорович</p>
          <p className={s.contacts__position}>Заступник директора</p>
        </div>
      </div>
    </section>
  );
}
