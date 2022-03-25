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
          <div className={s.gallery__item}>
            <Image
              src="/gallery/img-1.jpeg"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="Фотографія автошколи"
              placeholder="bluer"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
