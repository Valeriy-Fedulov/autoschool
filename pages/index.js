import Hero from "../components/layout/Hero";
import Seven from "../components/layout/Seven";
import Program from "../components/layout/Program";
import Education from "../components/layout/Education";
import Course from "../components/layout/Course";
import PageSection from "../components/layout/PageSection";
import Contacts from "../components/layout/Contacts";
import Gallery from "../components/layout/Gallery";
import Teachers from "../components/layout/Teachers";
import Category from "../components/layout/Category";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <div className="hr__shadow"></div> */}
      <Category />
      {/* <div className="hr__shadow"></div> */}
      <Seven />
      {/* <div className="hr__shadow"></div> */}
      <Program />
      {/* <div className="hr__shadow"></div> */}
      <Education />
      {/* <div className="hr__shadow"></div> */}
      <Course />
      {/* <div className="hr__shadow"></div> */}
      <PageSection />
      {/* <div className="hr__shadow"></div> */}
      <Contacts />
      {/* <div className="hr__shadow"></div> */}
      <Gallery />
      {/* <div className="hr__shadow"></div> */}
      <Teachers />
    </>
  );
}
