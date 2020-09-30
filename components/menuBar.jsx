import {blackColor} from "../styles/colors";
import { Icon } from '@iconify/react';
import iconsMap from './iconsMap';

export default function MenuBar() {
  return (
    <div>
      <style jsx>
        {`
          .header {
            display: flex;
            background-color: ${blackColor};
            color: white;
          }
          .header a {
            color: white;
          }
          .header-nav .nav-right {
            display: flex;
          }

          .linkedin-span {
            background-color: white;
            display: inline-block;
            border-right: 1px solid black;
          }
        `}
      </style>
      <div className="header header-fixed unselectable header-animated">
        <div className="header-brand">
            <div className="nav-item no-hover">
                <a><h6 className="title">Andres Garcia</h6></a>
            </div>
            <div class="nav-item">
              <span className="linkedin-span">
                <a href="https://github.com/andres-thefirst" target="_blank">
                    <Icon icon={iconsMap["github"].icon} style={{width: "50px", height: "50px"}}/>
                </a>
              </span>
              <span className="linkedin-span">
                <a href="https://www.linkedin.com/in/andr%C3%A9s-no%C3%A9-garc%C3%ADa-medrano-866264b9/" target="_blank">
                    <Icon icon={iconsMap["linkedin"].icon} style={{width: "50px", height: "50px"}}/>
                </a>
              </span>
          </div>
        </div>
      <div className="header-nav" id="header-menu">
            <div className="nav-right">
                <div className="nav-item active">
                    <a href="#">Profile</a>
                </div>
                <div className="nav-item">
                    <a href="#">Fresh Technology Stack</a>
                </div>
                <div className="nav-item">
                  <a href="#">Professional Experience</a>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}