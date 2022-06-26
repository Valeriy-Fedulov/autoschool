import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import s from "../../styles/layout/Gallery.module.scss";

export default function Gallery() {
  const isBigMobile = useMediaQuery({ minWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

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

          <div className={s.gallery__wrapper}>
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

            {isDesktop && (
              <>
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
              </>
            )}
          </div>

          <div className={s.gallery__nav}>
            <button className={s.btn__img}>
              <div className={s.btn__arrow}>
                <Image
                  src="/arrow-left.svg"
                  width={25}
                  height={25}
                  alt="Стрілка вліво"
                  placeholder="bluer"
                />
              </div>
            </button>
            <p className={s.gallery__bull}>&bull; &bull; &bull;</p>
            <button className={s.btn__img}>
              <div className={s.btn__arrow}>
                <Image
                  src="/arrow-right.svg"
                  width={25}
                  height={25}
                  alt="Стрілка вліво"
                  placeholder="bluer"
                />
              </div>
            </button>
          </div>

          {isTablet && (
            <button className={`btn ${s.gallery__btn}`}>всі фоторгафії</button>
          )}
        </div>
        <div className="hr__shadow"></div>
      </div>
    </section>
  );
}
