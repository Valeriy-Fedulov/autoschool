import Image from "next/image";
import s from "../../styles/layout/PageSection.module.scss";

export default function PageSection() {
  return (
    <section>
      <div className="container">
        <h2>
          <span>Що я можу отримати</span> із додаткових навчальних програм?
        </h2>
        <ul>
          <li>
            <h3>
              ПРОГРАМА НАВЧАННЯ ДЛЯ ОСІБ - що отримали водійські посвідчення.
            </h3>
            <p>
              Але почувають себе невпевнено в умовах інтенсивного міського руху.
            </p>
            <ul></ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
