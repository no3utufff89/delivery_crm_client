import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';

type Logo = {
    width: number;
    height: number;
    alt: string;
    logoText: string;
    className?: string;
    textColor?: string;
    textSize?: string;
}
export const Logo = (props: Logo) => {
    return (
        <Link  to={'/'} className={props.className ? `${props.className} flex items-center relative max-w-max` : 'flex items-center relative max-w-max'}>
             <img src={logoImage} alt={props.alt}  width={props.width} height={props.height}/>
             <span className={props.textColor ? `${props.textColor} font-semibold  text-[20px] uppercase` : 'font-semibold text-[40px] uppercase text-white'}>{props.logoText}</span>
        </Link>
       
    )
}