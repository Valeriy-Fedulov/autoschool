import Image from "next/image";
import s from "../../styles/layout/Teachers.module.scss";

export default function Teachers() {
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
            <div>
              <div className={s.teachers__shadow}>
                <div className={s.teachers__foto}>
                  <Image
                    src="/foto/teacher.jpeg"
                    width={225}
                    height={225}
                    alt="Викладач"
                    placeholder="bluer"
                  />
                </div>
              </div>
              <h3 className={s.teachers__name}>Дмитрій Іванов</h3>
              <p className={s.teachers__position}>Теоретичні занятя</p>
              <button className={s.teachers__btn}>Інструктор</button>
            </div>

            <div>
              <div className={s.teachers__shadow}>
                <div className={s.teachers__foto}>
                  <Image
                    src="/foto/teacher.jpeg"
                    width={225}
                    height={225}
                    alt="Викладач"
                    placeholder="bluer"
                  />
                </div>
              </div>
              <h3 className={s.teachers__name}>Дмитрій Іванов</h3>
              <p className={s.teachers__position}>Теоретичні занятя</p>
              <button className={s.teachers__btn}>Інструктор</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
