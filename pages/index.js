import Head from 'next/head';

import MenuBar from '../components/menuBar';
import AboutMe from '../components/aboutMe';
import Skills from '../components/Skills';
import Experience from '../components/experience';
import TechStack from '../components/techStack';
import Other from "../components/other";
import Footer from "../components/footer";
import {StateMenuItemsContext} from'../context';
import {blackColor} from "../styles/colors";

export default function Home() {
  return (
    <>
    <Head>
        <title>Andres Garcia</title>
        <meta name="author" content="Andres Noe Garcia Medrano" />
        <meta name="description" content="I'm Andres Noe Garcia Medrano, a versatile full-stack Software Engineer" />
        <meta name="keywords" content="Andres Noe Garcia Medrano, Digital Resume, Interactive Resume, Software Enginner, Full-stack WEB developer, Startup, Interactive CV, Resume, CV, Data Structures, JavaScript, React.js, Angular, Scala, Go, Algorithms" />
        <meta name="robots" content="index, follow" />
		    <meta name="revisit-after" content="14 days" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    </Head>
    <style jsx>
    {`
      #splash-img {
        background-color: ${blackColor};
        background-image: url("sf_city.jpg");
      }
      .main-title {
        background-color: rgba(0, 0, 0, .3);
      }
    `}
  </style> 
  <StateMenuItemsContext>
    <MenuBar/>
    <div id="splash-img" className="hero fullscreen hero-img parallax-img">
        <div className="hero-body">
            <div className="content u-text-center main-title">
                <h1 className="uppercase white title">Andres Garcia</h1>
                <h2 className="uppercase white sub-title">Resume</h2>
            </div>
        </div>
    </div>
    <AboutMe/>
    <Skills/>
    <Experience/>
    <TechStack />
    <Other/>
  </StateMenuItemsContext>
  <Footer />
  </>
  );
}
