import { useRef } from "react";
import { Icon } from '@iconify/react';

import listExperience from './listExperience';
import iconsMap from './iconsMap';
import {useMenuItems} from'../context';
import Slider from "react-slick";

export default React.memo(function Experience() {
  const id= "experience";
  const sectionEL = useRef(null);
  useMenuItems(id, sectionEL);

  const settings = {
    dots: false,
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

  return (
    <>
    <style jsx>
    {
      `
        // .experience {
        //   display: flex;
        //   flex-wrap: wrap;
        //   justify-content: space-between;
        // }

        .item-card {
          max-width: 300px;
          margin: 0 8px;
        }

        .item-card:nth(0) {
          max-width: 300px;
          height: 100%;
          margin-left: px;
        }

        .item-card .card-head {
          display: block;
        }

        .list-tech-logo {
          display: flex;
          justify-content: flex-start;
        }
        .experience .tech-logo {
          display: none;
        }
      `
    }
    </style>
  <section ref={sectionEL} id={id} className="content panel">
  <h2>Professional Experience</h2>
  <div className="divider"/>
  <div className="experience">
  <Slider {...settings}>
    {
      listExperience.map((item, index) => (
      <div className="card item-card " key={item.date}>
        <div className="card-head r">
            <div className="title">{item.position} at {item.company}</div>
            <div className="subtitle">{item.date}</div>
        </div>
        <div className="content">
            <p className="title">{item.project}</p>
            {item.description}
        </div>
        <div className="action-bar u-center list-tech-logo">
          {item.techList && item.techList.map((iconItem) => (<Icon key={`${item.date}-${iconsMap[iconItem].name}`} icon={iconsMap[iconItem].icon} title={iconsMap[iconItem].name} style={{width: "58px", height: "58px", padding: "8px"}}/>))}
        </div>
      </div>
      ))}
      </Slider>
  </div>
  </section>
  </>
  ) 
});