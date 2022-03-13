import Layout from "../components/Layout";
import "modern-normalize/modern-normalize.css";
import Head from "next/head";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
