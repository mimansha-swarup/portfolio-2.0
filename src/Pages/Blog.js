import PgHeading from "../Components/PgHeading";
import Cards from "../Components/Cards";
import {blogdb} from '../db/BlogLists'

const BlogPg = () => {
    return ( 
        <div className="project">
            <PgHeading title="Blogs"/>
    <ol reversed className="project-cont col">
      {
        blogdb.reverse().map(proj=>(
          <Cards key={proj.id} isProj={false}  proj={proj}/>

        ))
      }
      
    </ol>
  </div>
     );
}
 
export default BlogPg;