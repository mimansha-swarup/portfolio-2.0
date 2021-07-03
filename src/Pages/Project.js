import PgHeading from "../Components/PgHeading";

import numberPattern from "../assets/number.svg"

const ProjectPg = () => {
    return ( 
        <div className="project">
            <PgHeading title="Projects"/>
        <ol className="project-cont">
          <div className="card">
          <li>
              <img src={numberPattern} alt="" className="num-patt" />
            <p className="project-title">Spotify Clone</p>
            <div className="stack">
                <p className="badge">heml</p>
            </div>
            <p className="description">Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever 
</p>

          <button className="primary-btn">view code</button>
          <button className="sec-btn">view code</button>
          </li>
          </div>
        </ol>
        <h1>hello</h1>
      </div>
    
     );
}
 
export default ProjectPg;