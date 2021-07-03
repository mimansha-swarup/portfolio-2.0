// import {BrowserRouter as Router , Route, Switch} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ProjectPg from './Pages/Project';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <ProjectPg />
      
    </div>
  );
}

export default App;
