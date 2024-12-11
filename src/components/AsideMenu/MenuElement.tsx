import { useAppSelector } from "../../hooks";
import { getCurrentPageTitle } from "../../store/slices/settingsSlice";
import { AsideMenuItem } from "../../types/types";
import { Link } from 'react-router-dom';

export const MenuElement = (item: AsideMenuItem) => {
    const textColor = item.iconColor;
    const currentPage = useAppSelector(getCurrentPageTitle);
    const isCurrentPage = currentPage?.includes(item.russianTitle);
    return (
        <li>
            <Link 
            to={item.url} 
            title={item.russianTitle}
         
            className={isCurrentPage ? `flex pt-2 pl-6 pb-2   gap-x-2 w-full h-full text-[${textColor}] bg-mainBg rounded-tl-[25px] rounded-bl-[25px]` : `flex pt-2 pl-2 pb-2   gap-x-2 w-full h-full text-[${textColor}]`}
            >
                <item.icon color={item.iconColor}/>
                <p style={
                    {color: `${item.iconColor}`}
                }>{item.title}</p>
            </Link>
        </li>
    )
}