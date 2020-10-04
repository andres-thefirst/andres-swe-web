import {useMenuItems} from'../context';
import { useRef } from "react";

export default React.memo(function Skills() {
  const info = [
    "Develop, test and deploy new functionalities.",
    "Create code readable, maintainable and scalable.",
    "Perform code reviews.",
    "Make estimations for delivering any piece of code",
    "Deep understanding of web service technologies (HTTP, REST, JSON) and design principles.",
    "Single Page Application with Server Side Rendering.",
  "Work with high availability and data intensive backends.",
  "Ability to work with both backend and frontend technologies",
  "Cloud based technologies.",
  "Authentication and authorization (ACL) .",
  "SQL and NoSQL technologies.",
  "Building pipelines and bundle tools (NPM, Maven, Webpack, Gulp)",
  "Release applications to production.",
  "Logging and Monitoring.",
  "Knowledge in design and architectural patterns with strong focus on performance and application reliability.",
  "CI/CD: General concepts, Tools (Bamboo, Jenkins)",
  "Containers: General understanding.",
  "Work with agile methodologies",
  ];
  const id = "skills"
  const sectionEL = useRef(null);
  useMenuItems(id, sectionEL);

  return (
    <>
    <style jsx>{
      `
        .skills {
          background-color: #252525;
          color: white
        }   
      `
    }
    </style>
    <section ref={sectionEL} id={id} className="skills panel">
      <div className="content">
        <h2>Skills</h2>
        <div className="divider"/>
        <div className="row">
          <div className="col-6">
            <ul>
              {
                info.slice(0, info.length/2).map((item) => {
                  return <li key={item.substring(0, 10)}>{item}</li>
                })
              }
            </ul>
          </div>
          <div className="col-6">
            <ul>
            {
              info.slice(info.length/2).map((item) => {
                return <li key={item.substring(0, 10)}>{item}</li>
              })
            }
          </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  )
});
