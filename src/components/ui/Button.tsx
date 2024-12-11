import { LucideIcon } from "lucide-react"
import { useModalstatusChange } from "../../hooks";

type buttonProps = {
    type: 'submit' | 'reset' | 'button',
    btnText?: string,
    btnIcon?: LucideIcon,
    iconSize?: number,
    iconColor?: string,
    className?: string,
    disabled?: boolean,
    onClick?: React.EventHandler<React.FormEvent<HTMLFormElement>>,
}
export const Button:React.FC<buttonProps> = (props) => {
    const [ handleModalOpen] = useModalstatusChange();

    return (
        <button onClick={handleModalOpen} className="btn flex gap-x-2 items-center flex-row-reverse rounded-lg border-asideColor border p-2 w-[230px] justify-center mr-[30px]" type={props.type}>{props.btnText}
             {props.btnIcon && <props.btnIcon size={props.iconSize || 16} color={props.iconColor || 'red'} />}
    
        </button>
    )
}