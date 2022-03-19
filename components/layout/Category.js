import Image from "next/image";
import s from "../../styles/layout/Category.module.scss";

export default function Category() {
  return (
    <section>
      <div className="container">
        <h2>
          Вибери <span>категорію</span>, яку ти хочеш саме зараз
        </h2>
      </div>
    </section>
  );
}
