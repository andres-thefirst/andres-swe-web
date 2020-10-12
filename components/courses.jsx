import {useMenuItems} from'../context';
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

const certificates = [
  {
    srcSlick: "AlgoExpert_Certificate_slick.webp",
    srcModal: "AlgoExpert_Certificate_modal.webp",
    name: "AlgoExpert certificate"
  },
  {
    srcSlick: "hackerrank_slick.webp",
    srcModal: "hackerrank_modal.webp",
    name: "Hackerrank certificate"
  },
  {
    srcSlick: "aws-serverless-apis-and-apps_slick.webp",
    srcModal: "aws-serverless-apis-and-apps_modal.webp",
    name: "AWS serverless APIs & Apps"
  },
  {
  srcSlick: "advante-react-and-redux_slick.webp",
  srcModal: "advante-react-and-redux_modal.webp",
  name: "Advance React and redux certificate"
},
{
  srcSlick: "react-native-advanced-concepts_slick.webp",
  srcModal: "react-native-advanced-concepts_modal.webp",
  name: "React native advanced concetps certificate"
},
{
  srcSlick: "the-comple-node-developer-course_slick.webp",
  srcModal: "the-comple-node-developer-course_modal.webp",
  name: "The complete node.js developer course certificate"
},
{
  srcSlick: "the-complete-developers-guide-to-mongodb_slick.webp",
  srcModal: "the-complete-developers-guide-to-mongodb_modal.webp",
  name: "The complete developers guide to mongodb certificate"
}, 
{
  srcSlick: "the-complete-react-native-hooks-course_slick.webp",
  srcModal: "the-complete-react-native-hooks-course_modal.webp",
  name: "The complete react native and hooks course certificate"
},
{
  srcSlick: "the-modern-graphql-bootcamp_slick.webp",
  srcModal: "the-modern-graphql-bootcamp_modal.webp",
  name: "The modern graphql bootcamp certificate"
}];


export default React.memo(function Courses() {
  const id = "courses";
  const sectionEL = useRef(null);
  useMenuItems(id, sectionEL);
  const [certificate, onCertificate] = useState(null);

  const settings = {
    customPaging: function(i) {
      const {srcSlick, name} = certificates[i];
      return (
        <a role="button">
          <img loading="lazy" src={srcSlick} alt={name} width="50px" height="50px"/>
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
          <div key={item.srcSlick.substring(0, 10)} className="item">
            <a href="#modal-id" onClick={() => onCertificate(item)}>
              <img loading="lazy" src={item.srcSlick} alt={item.name} />
            </a>
          </div>
          )
        )}
      </Slider>
      </div>
      <div className="modal modal-large modal-animated--zoom-in"  id="modal-id">
          <a href="#NON-EXISTANT-DIV" className="modal-overlay close-btn" aria-label="Close" onClick={() => onCertificate(null)}></a>
          {certificate && <div className="modal-content" role="document">
              <div className="modal-body">
                <img loading="lazy" src={certificate.srcModal} alt={certificate.name} className="certificate-image"/>
              </div>
          </div>}
      </div>
    </section>
    </>
  )
});