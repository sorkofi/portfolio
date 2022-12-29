import "../styles/topbar.css";

interface Props {
   menus: Array<string>,
   img: string,
}

export function Topbar(props: Props) {
   return (
      <div className="top-bar">
        {
            props.menus.map((menu: any) => {
               return <button className="button-global menu">{menu}</button>
            })
        }
        <div className="divider" />
        
        <a target="_blank" href="https://github.com/sorkofi"><img src={props.img} /></a>
      </div>
   );
}