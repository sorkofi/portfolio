import "../styles/topbar.css";

export function Topbar(props: any) {
   return (
      <div className="top-bar">
        {
            props.menus.map((menu: any) => {
               <button className="button-global menu">{props.menus}</button>
            })
        }
        <div className="divider" />
        
        <a target="_blank" href="https://github.com/sorkofi"><img src={props.img} /></a>
      </div>
   );
}