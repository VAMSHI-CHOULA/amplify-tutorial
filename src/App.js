import './App.css';
// import logo from './logo.svg';
// import RazorpayButton  from './RazorpayButton';
import Header from './Header';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
function App() {
  
  return (
    // <div className="App">
    //   <Header />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Hello amplify . How are you.
    //     </a>
    //   </header>
    //   <div>
    //       <RazorpayButton />
    //   </div>
    // </div>
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    </div>
  );
}

export default App;
