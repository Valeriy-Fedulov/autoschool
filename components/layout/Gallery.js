import Image from "next/image";
import s from "../../styles/layout/Gallery.module.scss";

export default function Gallery() {
  return (
    <section>
      <div className="container">
        <div className={s.category__bg}>
          <Image
            alt="Mountains"
            src="/images/background/BG-gallery.jpeg"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="bluer"
            priority
          />
        </div>
        <div className="page__sections">
          <h2 className="title__sections">
            <span className="title__base">Фотографії</span> автошколи
          </h2>
          <div className={s.gallery__border}>
            <div className={s.gallery__item}>
              <Image
                src="/gallery/img-1.jpeg"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Фотографія автошколи"
                placeholder="bluer"
              />
            </div>
          </div>
          <div className={s.gallery__nav}>
            <button className={s.btn__img}>
              <div className={s.btn__arrow}>
                <Image
                  src="/arrow-left.svg"
                  width={17}
                  height={17}
                  alt="Стрілка вліво"
                  placeholder="bluer"
                ></Image>
              </div>
            </button>
            <p className={s.gallery__bull}>&bull; &bull; &bull;</p>
            <button className={s.btn__img}>
              <div className={s.btn__arrow}>
                <Image
                  src="/arrow-right.svg"
                  width={17}
                  height={17}
                  alt="Стрілка вліво"
                  placeholder="bluer"
                ></Image>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
