export default function TechStack() {
  const info = [
    "Frontend: Javascript, Angular 7+, Reac.jst, Unstated.js, Redux.js, RxJS, GraphQL, Jasmine, Mocha, Jest, Enzyme, Cypress.io, NPM, Webpack, Material UI, Sass",
    "Backend: Go, GoConvey, GoTesting, Scala, ScalaTest, Python, Django, Django Rest Framework, Node.js, Express.js, Mongoose, SuperTest",
    "AWS: API Gateway, Lambda, S3, CloudWatch, CloudFront, Cognito, DynamoDB.",
    "Mobile: React Native, React Native Elements, React Navigation, Expo",
    "Other: BigQuery, Postgres, Redis, Docker."
  ]

  return (
    <>
    <style jsx>{
      `
        .tech-stack {
          background-color: #252525;
          color: white
        }   
      `
    }
    </style>
    <section className="tech-stack  panel">
      <div className="content">
        <h2>Fresh Technology Stack</h2>
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
}
