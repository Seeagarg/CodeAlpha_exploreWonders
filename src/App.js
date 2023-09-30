import logo from './logo.svg';
import './App.css';
// import Home from './pages/Home/Home'


import {
  BrowserRouter,  Routes,  Route
} from "react-router-dom";

import Home from './pages/Home/Home';
import About from './pages/About';

function App() {
  return (<BrowserRouter>
       <Routes>
       {/* <Home/> */}
       <Route path="/trip"  element={<Home/>}/> 
       <Route path="/nav"  element={<About/>}/>

       </Routes>
        </BrowserRouter>
  );
}

export default App;


 // <div className="App">
    
    //   <header className="App-header">
    //      Hello World
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <h1> This is joint project</h1>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    // </div>

    // <div>
    //   <h1>This is heading </h1>
    // </div>