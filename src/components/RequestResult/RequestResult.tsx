// import { Link } from "react-router-dom"
// import { useAppDispatch, useAppSelector } from "../../hooks"
// import { clearError } from "../../store/slices/userSlice/userSlice";

// enum RequestVersions {
//     REQUEST_SUCCESS = 'It worked',
//     REQUEST_FAILURE = 'It failed',
// }
// type IReauestResultProps = {
//     variant: 'ok' | 'failure',

// }
// export const ReaquestResult: React.FC<IReauestResultProps> = (props) => {
//     const dispatch = useAppDispatch();
//     const userError = useAppSelector(state => state.userInfo.error?.message);
//     const handleClose = () => {
//         dispatch(clearError());
//     }
//     return (
//         <>
//         {props.variant === 'ok' ?
//            <div className="flex flex-col gap-y-4">
//            {<p className="text-[22px] text-violet font-bold">{RequestVersions.REQUEST_SUCCESS}</p>}
//            <Link className="bg-violet text-white border rounded-lg h-[50px] flex items-center justify-center px-4 mw-full" to={'/sign-in'} onClick={handleClose}>Now you can Log in</Link>
//        </div>  :
//         <div className="flex flex-col gap-y-4">
//            {<p className="text-[22px] text-red-600 font-bold">{RequestVersions.REQUEST_FAILURE}</p>}
//            <p>{userError}</p>
//            <Link className="bg-violet text-white border rounded-lg h-[50px] flex items-center justify-center px-4 mw-full" to={'/sign-up'} onClick={handleClose}>Try again</Link>
//            </div>
//        }
//         </>
       
//     )
// }