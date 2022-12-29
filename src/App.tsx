

import reactLogo from "./assets/react.svg";

import "./styles/global.css";

import Github from "./assets/github.svg";

import { Topbar } from "./components/Topbar";

const menus = [
  "Home",
  "About",
  "Skills",
  "Projects"
];

function App() {
  
  return (
    <div className="container">

      <Topbar img={Github} menus={menus} />
      
      <div className="header">
        <h1 className="name">Kinan<br />Principe<span className="yellow">.</span></h1>
        <h1 className="description">Front End Web<br />Developer</h1>
      </div>

      <div className="middle">
        <h1>hi</h1>
      </div>

    </div>
  )
}

export default App
