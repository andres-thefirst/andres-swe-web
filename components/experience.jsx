import listExperience from './listExperience';
import { Icon } from '@iconify/react';
import iconsMap from './iconsMap';

export default function Experience() {
  return (
    <>
    <style jsx>
    {
      `
        .experience {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .item-card {
          flex-grow: 1;
          max-width: 300px;
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
  <section className="content panel">
  <h2>Professional Experience</h2>
  <div className="divider"/>
  <div className="experience">
    {
      listExperience.map((item) => (
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
    ))
  }
  </div>
  </section>
  </>
  ) 
}