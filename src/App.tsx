

import reactLogo from "./assets/react.svg";

import "./styles/global.css";

import Github from "./assets/github.svg";

const menus = [
  "Home",
  "About",
  "Skills",
  "Projects"
];

function App() {
  
  return (
    <div className="container">

      <div className="top-bar">
        {
          menus.map((menus) => (
            <button className="button-global menu">{menus}</button>
          ))
        }
        <div className="divider" />
        
        <a target="_blank" href="https://github.com/sorkofi"><img src={Github} /></a>
      </div>
      
      <div className="header">
        <p>header</p>
      </div>

      <div className="middle">
        <h1>hi</h1>
      </div>

    </div>
  )
}

export default App
