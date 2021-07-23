
import dot from '../assets/namedot.svg';
import work from '../assets/worksvg.svg';

const Home = () => {
    return ( 
        <div className="home">
        {/* <div className="dot-bg"> */}

        <img className="dot-bg" src={dot} alt="dot" />
        {/* </div> */}
        <p className="greeting common" >I'm</p>
        <h2 className="name common" >MIMANSHA <br/>SWARUP</h2>
        <h1 className="desg common">CSE Undergrad.</h1>
        <div className="bg-img">

        <img className="work-bg" src={work} alt="dot" />
        </div>

      

      </div>
     );
}
 
export default Home;