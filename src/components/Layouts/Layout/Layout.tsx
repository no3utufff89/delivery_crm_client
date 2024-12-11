import { Logo } from "../../ui/Logo"
import { AsideMenu } from "../../AsideMenu/AsideMenu"
import { SearchForm } from "../../forms/SearchForm"
import { UserBlock } from "../../UserBlock/UserBlock"
import { Outlet } from "react-router-dom"

export const Layout:React.FC = () => {

    return (
        <div className="flex gap-x-10 bg-mainBg">
            <div className="w-[200px] pl-6 pt-6 bg-white flex flex-col gap-y-[70px]">
                <Logo alt="Logo" height={30} width={30} logoText="e-cart" textColor="text-black" textSize="20px" />
                <AsideMenu/>
            </div>
            <div className="flex flex-grow flex-col gap-y-6 ">
                <div className="p-6 flex justify-between items-center bg-white">
                    <SearchForm />
                    <UserBlock/>
                </div>
                <div className="bg-white">
                <Outlet/>

                
                   
                </div>
            </div>
        </div>
    )
}