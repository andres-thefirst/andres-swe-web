export default function Other() {
  return (
    <section className="other panel">
      <div className="row content">
        <div className="col-6">
          <h2>Education</h2>
          <div className="divider"/>
          <p className="title">Bachelor of Computer Systems Engineer - 2014</p>
          <p className="subtitle">Instituto Politécnico Nacional, México City</p>
        </div>
        <div className="col-6 ">
          <h2>Languages</h2>
          <div className="divider"/>
          <ul>
            <li>English Advance</li>
            <li>Spanish Native</li>
          </ul>
        </div>
        <div className="row content">
        <div className="col-6">
          <h2>Hobbies</h2>
          <div className="divider"/>
          <ul>
          {["Retired soccer player", "Video games", "Books", "Movies", "Anime", "Coding"].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        </div>
    </div>
    </section>
  );
}