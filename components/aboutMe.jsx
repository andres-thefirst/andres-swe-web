import {useMenuItems} from'../context';
import { useRef } from "react";

export default React.memo(function AboutMe() {
  const id = "about-me";
  const sectionEL = useRef(null);
  useMenuItems(id, sectionEL);
  
  return (
  <section ref={sectionEL} className="panel" id={id}>
    <div className="row content">
      <div className="col-12">
        <figure class="avatar avatar--xlarge avatar-me">
          <img src="angm.jpg" />
        </figure>
      </div>
      <div className="col-6">
            <h2>Summary</h2>
            <div className="divider"/>
            <p>
            Andrés has 10 years of experience developing software professionally, with a degree in Computer Systems he is a versatile 
            Software Engineer with a strong knowledge of software design and architectures. Andrés has experience as a tech leader, 
            coordinating teams both onshore & offshore to ensure timely delivery with great quality. 
            </p>
          </div>
      <div className="col-6">
      <h2>Objective</h2>
      <div className="divider"/>
        <p>
          Become a referent in software development, creating innovative, challenging and excellent systems that generate solutions to the industry and mankind
        </p>
      </div>
    </div>
  </section>
  )
})