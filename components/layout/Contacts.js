import Image from "next/image";
import s from "../../styles/layout/Contacts.module.scss";

export default function Contacts() {
  return (
    <section>
      <div className="container">
        <div className="page__sections">
          <h2 className="title__sections">Контакти</h2>
          <p>
            <span>Залишились питання?</span> Зв’яжіться з нами і ми відповімо на
            всі ваші запитання
          </p>
          <ul>
            <li>
              <span>Телефони</span> + 38 (099)-318-3873 + 38 (066)-088-6500 + 38
              (099)-151-7035
            </li>
            <li>
              <span>Електронна пошта</span> jaroslavafedulova@gmail.com
            </li>
            <li>
              <span>Адреса</span> м. Ужгород, вул. Підгірна, 28
            </li>
            <li>
              <span>Час роботи</span> Пн-Пт 10:00 - 18:00
            </li>
          </ul>
          <button className="btn">Зв’язатися з нами</button>
          <p>
            <span>Федулова Ярослава Іванівна</span> Директор
            <span>Суддя Михайло Федорович</span> Заступник директора
          </p>
        </div>
      </div>
    </section>
  );
}
