

import reactLogo from './assets/react.svg'

import './styles/global.css'

const menus = [
  "Home",
  "About",
  "Skills",
  "Projects"
]

function App() {
  
  return (
    <div className="container">

      <div className="top-bar">
        {
          menus.map((menus) => <button className="button-global menu">{menus}</button>)
        }
      </div>
      
      
      <div className="header">
        <p>header</p>
        <button className='button-global'>header</button>
      </div>

    </div>
  )
}

export default App
