import PgHeading from "../Components/PgHeading";
import Cards from "../Components/Cards";
import {projdb} from '../db/ProjectsList'



const ProjectPg = () => {
  const rev=projdb.reverse()
  console.log(rev)
    return ( 
        <div className="project">
            <PgHeading title="Projects"/>
        <ol reversed className="project-cont col">
          {
            projdb.reverse().map(proj=>(
              <Cards key={proj.id} isProj={true}  proj={proj}/>

            ))
          }
          
        </ol>
      </div>
    
     );
}
 
export default ProjectPg;