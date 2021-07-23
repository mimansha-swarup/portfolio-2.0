
import headdot from '../assets/subheading-dot.svg'
const PgHeading = ({title}) => {
    return ( 
        <div className="heading">
          <div className="bg-written common">{title.toUpperCase() }</div>
          <h1 className="sub-heading common">{title}</h1>

          <img src={headdot} alt="" className="sub-headingdot" />
        </div>
     );
}
 
export default PgHeading;