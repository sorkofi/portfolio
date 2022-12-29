

import reactLogo from "./assets/react.svg";

import "./styles/global.css";

const menus = [
  "Home",
  "About",
  "Skills",
  "Projects"
];
const socials = [
  "./assets/",
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
            <img src={sm} />
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
