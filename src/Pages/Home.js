
import dot from '../assets/namedot.svg';

const Home = () => {
    return ( 
        <div className="home">
        {/* <div className="dot-bg"> */}

        <img className="dot-bg" src={dot} alt="dot" />
        {/* </div> */}
        <p className="greeting common" >I'm</p>
        <h2 className="name common" >MIMANSHA <br/>SWARUP</h2>
        <h1 className="desg common">CSE Undergrad.</h1>
        <button className="primary-btn">view</button>
        <button className="sec-btn">view</button>
      

      </div>
     );
}
 
export default Home;