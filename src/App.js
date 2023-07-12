import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Register from "./components/register";
import RegPage from "./components/RegPage";

// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return (
    <Router>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/regpage" component={RegPage}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/about" component={About}/>
      </Router>
  );
}

// function App() {
//   return (
//     <>  <Login/>  </>
//   );
// }

export default App;
