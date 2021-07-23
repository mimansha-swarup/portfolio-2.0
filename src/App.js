// import {BrowserRouter as Router , Route, Switch} from "react-router-dom"
import ConnectinDetails from './Components/connectionDetails';
import FloatEmail from './Components/floatEmail';
import Navbar from './Components/Navbar';
import BlogPg from './Pages/Blog';
import Home from './Pages/Home';
import ProjectPg from './Pages/Project';
// FiLinkedin, FiTwitter,FiGithub


function App() {
  return (
    // <Router>

    // <div className="App">
    //   <Navbar/>
    //   <Switch>
    //     <Route to="/projects" component={ProjectPg} />
    //     <Route to="/blogs" component={BlogPg} />
    //     <Route exact to="/" component={Home} />
     
    //   </Switch>
      
    // </div>
    // </Router>
    <div className="App">
      <Navbar/>
      <Home/>
      <ConnectinDetails/>
      <FloatEmail/>
      <ProjectPg/>
      <BlogPg/>
     
        {/* <Route to="/projects" component={} />
        <Route to="/blogs" component={BlogPg} />
        <Route exact to="/" component={Home} /> */}
     
      
      
    </div>
  );
}

export default App;
