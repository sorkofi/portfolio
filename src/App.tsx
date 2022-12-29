

import reactLogo from "./assets/react.svg";

import "./styles/global.css";

import Github from "./assets/github.svg";

const menus = [
  "Home",
  "About",
  "Skills",
  "Projects"
];

const socials = [
  "aa",
  "aa",
  "aa"
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
        {
          socials.map((sm) => (
            <img src={Github} />
          ))
        }
      </div>
      
      
      <div className="header">
        <p>header</p>
      </div>

    </div>
  )
}

export default App
