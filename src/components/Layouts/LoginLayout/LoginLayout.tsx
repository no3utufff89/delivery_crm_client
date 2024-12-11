import { Outlet } from 'react-router-dom';
import { Logo } from '../../ui/Logo';
import s from './LoginPage.module.scss';
export const LoginLayout: React.FC= () => {
    
    return (
        <div className={`${s.wrapper} `}>
            <div className={`${s.wrapper__bg} p-[25px]`}>
            <Logo className='pointer-events-none' alt='logo' height={80} width={80} logoText='e-cart'/>
            </div>
            <div className={`${s.loginBlock} p-[25px] flex flex-col justify-center items-center`}>
                <Outlet/>
            </div>
        </div>
    )
}