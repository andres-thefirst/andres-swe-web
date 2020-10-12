import { useState, useEffect } from "react"
import {blackColor} from "../styles/colors";
import { Icon } from '@iconify/react';
import iconsMap from './iconsMap';
import {useMenuItemsContext} from'../context';

export default React.memo(function MenuBar() {
    const [scroll, setScroll] = useState(1)
    const [menuItems, dispatch] = useMenuItemsContext();
 
    useEffect(() => {
      const onScroll = () => {
          setScroll(window.scrollY)
      }

    document.addEventListener("scroll", onScroll)
    
     return () => {
       document.removeEventListener("scroll", onScroll)
      }
    }, [scroll])

    let active = "";
    let prev = 0;
    Object.keys(menuItems).forEach((key) => {
      const item = menuItems[key];
      if(scroll+150 >= item.current.offsetTop && prev < item.current.offsetTop) {
        active = key;
        prev =  item.current.offsetTop;
      }
    })

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
            display: inline-block;
          }
        `}
      </style>
      <div className="header header-fixed unselectable header-animated">
        <div className="header-brand">
            <div className="nav-item no-hover">
                <span><h6 className="title">Andres Garcia</h6></span>
            </div>
            <div className="nav-item no-hover">
                <a href="https://github.com/andres-thefirst" 
                  aria-label="andres github" 
                  target="_blank" 
                  rel="noopener noreferrer">
                    <Icon icon={iconsMap["github"].icon} style={{width: "40px", height: "40px"}}/>
                </a>
              </div>
              <div className="nav-item no-hover">
                <a href="https://www.linkedin.com/in/andr%C3%A9s-no%C3%A9-garc%C3%ADa-medrano-866264b9/" 
                  target="_blank" 
                  aria-label="andres linkedin" 
                  rel="noopener noreferrer">
                    <Icon icon={iconsMap["linkedin"].icon} style={{width: "40px", height: "40px"}}/>
                </a>
              </div>
        </div>
      <div className="header-nav" id="header-menu">
            <div className="nav-right">
                <div className={`nav-item ${active === 'about-me' ? 'active' : ''}`}>
                    <a href="#about-me">About Me</a>
                </div>
                <div className={`nav-item ${active === 'skills' ? 'active' : ''}`}>
                    <a href="#skills">Skills</a>
                </div>
                <div className={`nav-item ${active === 'experience' ? 'active' : ''}`}>
                    <a href="#experience">Professional Experience</a>
                </div>
                <div className={`nav-item ${active === 'technology' ? 'active' : ''}`}>
                    <a href="#technology">Fresh Technology Stack</a>
                </div>
                <div className={`nav-item ${active === 'courses' ? 'active' : ''}`}>
                    <a href="#courses">Courses</a>
                </div>
                <div className={`nav-item ${active === 'education' ? 'active' : ''}`}>
                  <a href="#education">Education and Hobbies</a>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
})