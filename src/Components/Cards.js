import numberPattern from "../assets/number.svg"


const Cards = ({proj,isProj}) => {
    return ( 
        <div className="card ">
          <li key={proj.id} className="data-cont row">
            <div className="number-cont row">
              <img src={numberPattern} alt="" className="num-patt" />
              <span className="numeric">{proj.id}</span>
            </div>
            <div className="text-content col">
              <p className="project-title common">{proj.title}</p>
             { isProj && <div className="stack-cont">
                  {
                      proj.stack.map((tech,tid)=>(
                        <p key={tid} className="badge common">{tech}</p>
                      ))
                  }
                
              </div>}
               <p className="description common">{proj.desc}</p>
              <div className="row">
                <a  href={proj.live} target="_blank" rel="noopener noreferrer" >
                    <button className="primary-btn">{isProj ? "Live Project":"Live Blog"}</button>
                </a>
                
                {isProj && <a  href={proj.code}target="_blank" rel="noopener noreferrer">
                <button className="sec-btn">View Code</button>
                </a>}
                
              </div>
            </div>

            { isProj && <a href={proj.live} target="_blank" rel="noopener noreferrer"> 
            <div className="proj-img-cont">
            </div>
              <img className="proj-img" src={proj.img} alt="" />
            </a>}

          </li>
        </div>
     );
}
 
export default Cards;         