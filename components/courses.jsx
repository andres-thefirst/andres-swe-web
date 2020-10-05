import {useMenuItems} from'../context';
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

const certificates = [
  {
    src: "AlgoExpert_Certificate.webp",
    name: "AlgoExpert certificate"
  },
  {
    src: "Hackerrank.webp",
    name: "Hackerrank certificate"
  },
  {
  src: "advante-react-and-redux.jpg",
  name: "Advance React and redux certificate"
},
{
  src: "react-native-advanced-concepts.jpg",
  name: "React native advanced concetps certificate"
},
{
  src: "the-comple-node-developer-course.jpg",
  name: "The complete node.js developer course certificate"
},
{
  src: "the-complete-develooers-guide-to-mongodb.jpg",
  name: "The complete developers guide to mongodb certificate"
}, 
{
  src: "the-complete-react-native-hooks-course.jpg",
  name: "The complete react native and hooks course certificate"
},
{
  src: "the-modern-graphql-bootcamp.jpg",
  name: "The modern graphql bootcamp certificate"
}];


export default React.memo(function Courses() {
  const id = "courses";
  const sectionEL = useRef(null);
  useMenuItems(id, sectionEL);
  const [certificate, onCertificate] = useState(certificates[0]);

  const settings = {
    customPaging: function(i) {
      const {src, name} = certificates[i];
      return (
        <a aria-role="button">
          <img loading="lazy" src={src} alt={name} width="50px" height="50px"/>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    const hanlderKeyUp = (e) => {
      if(e.key === "Escape") {
          const modals = document.querySelectorAll('.modal-overlay');
          for (const modal of modals) {
              modal.click();
          }
      }
    };

    document.addEventListener('keyup', hanlderKeyUp);

    return () => document.removeEventListener("keyup", hanlderKeyUp);
  });

  return (
    <>
    <style jsx>
    {
      `
         .certificate-image {
          max-height: 450px;
        }

        .close-button {
          color: white;
        }
      `
    }
    </style>
    <section ref={sectionEL}  id="courses" className="content panel">
      <h2>Courses</h2>
      <div className="divider"/>
      <div className="courses">
      <Slider {...settings}>
        {certificates.map(item => (
          <div key={item.src.substring(0, 10)} className="item">
            <a href="#modal-id" onClick={() => onCertificate(item)}>
              <img loading="lazy" src={item.src} alt={item.name} />
            </a>
          </div>
          )
        )}
      </Slider>
      </div>
      <div className="modal modal-large modal-animated--zoom-in"  id="modal-id">
          <a href="#NON-EXISTANT-DIV" className="modal-overlay close-btn" aria-label="Close"></a>
          <div className="modal-content" role="document">
              <div className="modal-body">
                <img loading="lazy" src={certificate.src} alt={certificate.name} className="certificate-image"/>
              </div>
          </div>
      </div>
    </section>
    </>
  )
});