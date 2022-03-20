import Image from "next/image";
import s from "../../styles/layout/Gallery.module.scss";

export default function Gallery() {
  return (
    <section>
      <div className="container">
        <div className="page__sections">
          <h2 className="title__sections">
            <span className="title__base">Фотографії</span> автошколи
          </h2>
        </div>
      </div>
    </section>
  );
}
