import "../styles/topbar.css";

interface Props {
   menus: Array<string>,
   img: string,
}

export function Topbar(props: Props) {
   const width = window.innerWidth;
   const breakpoint = 620;

   return (
      <div className="top-bar">
        {
            props.menus.map((menu: any) => {
               return width < breakpoint ? <button className="button-global menu">{menu}</button> : <h1>too small</h1>;
            })
        }
        <div className="divider" />
        
        <a target="_blank" href="https://github.com/sorkofi"><img src={props.img} /></a>
        <a target="_blank" href="https://github.com/sorkofi"><img src={props.img} /></a>
      </div>
   );
}