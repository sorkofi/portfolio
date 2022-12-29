

import reactLogo from "./assets/react.svg";

import "./styles/global.css";

import Github from "./assets/github.svg";

import { Topbar } from "./components/Topbar";
import { Header } from "./components/Header";

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
      <Header />

      {/* <div className="middle">
        <h1>hi</h1>
      </div> */}

    </div>
  )
}

export default App
