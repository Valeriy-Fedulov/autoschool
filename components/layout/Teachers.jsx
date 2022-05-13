import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import s from "../../styles/layout/Teachers.module.scss";

export default function Teachers() {
  const isBigMobile = useMediaQuery({ minWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <section>
      <div className="container">
        <div className={s.teachers__bg}>
          <Image
            alt="Mountains"
            src="/images/background/BG-teachers.jpeg"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="bluer"
            priority
          />
        </div>
        <div className="page__sections">
          <h2 className="title__sections">
            Наші педагогічні <span className="title__base">працівники</span>
          </h2>

          <div className={s.teachers__wrapper}>
            <button className={s.teachers__btnArrowLeft}>
              <Image
                src="/btn_arrow.svg"
                width={40}
                height={50}
                alt="Викладач"
              />
            </button>

            <div>
              <div className={s.teachers__shadow}>
                <div className={s.teachers__foto}>
                  <Image
                    src="/foto/teacher.jpeg"
                    width={385}
                    height={385}
                    alt="Викладач"
                    placeholder="bluer"
                  />
                </div>
              </div>
              <h3 className={s.teachers__name}>Дмитрій Іванов</h3>
              <p className={s.teachers__position}>Теоретичні занятя</p>
              <button className={s.teachers__btn}>Інструктор</button>
            </div>

            {isBigMobile && (
              <div>
                <div className={s.teachers__shadow}>
                  <div className={s.teachers__foto}>
                    <Image
                      src="/foto/teacher.jpeg"
                      width={385}
                      height={385}
                      alt="Викладач"
                      placeholder="bluer"
                    />
                  </div>
                </div>
                <h3 className={s.teachers__name}>Дмитрій Іванов</h3>
                <p className={s.teachers__position}>Теоретичні занятя</p>
                <button className={s.teachers__btn}>Інструктор</button>
              </div>
            )}

            {isTablet && (
              <div>
                <div className={s.teachers__shadow}>
                  <div className={s.teachers__foto}>
                    <Image
                      src="/foto/teacher.jpeg"
                      width={385}
                      height={385}
                      alt="Викладач"
                      placeholder="bluer"
                    />
                  </div>
                </div>
                <h3 className={s.teachers__name}>Дмитрій Іванов</h3>
                <p className={s.teachers__position}>Теоретичні занятя</p>
                <button className={s.teachers__btn}>Інструктор</button>
              </div>
            )}

            <button className={s.teachers__btnArrowRight}>
              <Image
                src="/btn_arrow.svg"
                width={40}
                height={50}
                alt="Викладач"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
