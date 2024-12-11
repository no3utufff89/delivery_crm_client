import { ChevronDown, Edit2Icon, LogOutIcon } from "lucide-react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { useEffect, useState } from "react";
import { logoutUser } from "../../store/slices/userSlice/requests";
import { useNavigate } from "react-router-dom";

export const UserBlock = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useAppSelector(state => state.user.isAuthenticated);
    const currentUserFromState = useAppSelector(state => state.user.user);
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => setOpenMenu(!openMenu);
    const handleLogout = () => {
        dispatch(logoutUser());
        
    }
    useEffect(() => {
        if(openMenu) {
            document.querySelector('.user-menu')?.classList.add('active-user-menu')
        } else {
            document.querySelector('.user-menu')?.classList.remove('active-user-menu')
        }
    },[openMenu])
    useEffect(() => {
       if (!isAuth) {
        navigate('/sign-in', {replace: true})
       }
    },[isAuth])
    return (
        <div className="flex gap-x-3 items-center relative">
        <div className="flex items-center gap-x-2">
            <p>{currentUserFromState?.firstName}</p>
            <p>{currentUserFromState?.lastName}</p>
        </div>
        <img className="rounded-full block" src="./avatar.jpg" alt="user avatar" width={50} height={50} />
        <button 
        className="w-4 h-4 rounded-full flex items-center justify-center bg-violet" 
        aria-label="Open user menu"
        onClick={() => {
            toggleMenu()
        }}
        >
            <ChevronDown size={20} color="#fff" />
        </button>
        <div className="absolute bottom-[-100px] left-0 hidden w-[100%] user-menu">
            
            <ul className="flex flex-col gap-y-4 rounded-xl border p-2 bg-white">
                <li>
                    <a href="/" className="flex items-center gap-x-2">
                        <Edit2Icon color="#7882ea"/>
                        <span>Edit profile</span>
                    </a>
                </li>
                <li>
                  
                    <button className="btn flex items-center gap-x-2 w-full" onClick={() => handleLogout()}>
                    <LogOutIcon color="#7662ea"/>
                    <span>Logout</span>
                    </button>
                </li>
            </ul>
        </div>

    </div>
      
    )
}