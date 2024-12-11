import { menuItems } from "../../staticData";
import { MenuElement } from "./MenuElement";

export const AsideMenu = () => {
   
    return (
        <ul className="flex flex-col gap-y-8 rounded  flex-grow">
           {menuItems.map (item => {
            return <MenuElement key={item.title} {...item} />
           })}
        </ul>
    )
}