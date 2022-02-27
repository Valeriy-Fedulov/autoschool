import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "../components/MainLayout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AutoSchool</title>
        <meta
          name="keywords"
          content="Автошкола, Ужгород, УМОУСЦ ТСО України, Підгірна 28, Підгірна 27, курси водіїв, ДОСААФ"
        />
        <meta
          name="description"
          content="Автошкола УМОУСЦ ТСО України в м. Ужгород вул. Підгірна, 28  проводить навчання водіїв всіх категорій. Термін навчання - 2,5 місяці"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout></MainLayout>
    </div>
  );
}
