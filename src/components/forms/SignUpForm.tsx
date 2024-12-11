import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpRequest, User } from "../../types/types";



export const SignUpForm = () => {
  

    const schema = yup
    .object()
    .shape({
        firstName: yup.string()
        .required('First name is required')
        .min(2, "First name length should be at least 2 characters")
        .matches(/^[a-zA-Zа-яА-Я]*$/, "Login should not contain spaces, numbers, parentheses, or hyphens"),
        lastName: yup.string()
        .required()
        .min(2, "Last name length should be at least 2 characters")
        .matches(/^[a-zA-Zа-яА-Я]*$/, "Login should not contain spaces, numbers, parentheses, or hyphens"),
        login: yup.string()
        .required()
        .min(3, "Login length should be at least 3 characters")
        .matches(/^[a-zA-Zа-яА-Я0-9]*$/, "Login should not contain spaces, parentheses, or hyphens"),
        password: yup.string()
        .required()
        .min(4, "Password length should be at least 4 characters")
        .matches(/^[a-zA-Zа-яА-Я0-9]*$/, "Password should not contain spaces, parentheses, or hyphens"),
        password_confirm: yup.string()
        .required()
        .oneOf([yup.ref("password")], "Passwords do not match"),
    })
    .required()

    const {
       
        register,
        handleSubmit,
       
        formState: { errors},

    } = useForm<Omit<User, 'id'| 'role'|'avatar'>>({
        resolver: yupResolver(schema)
    });
   
 
    const onSubmit =  (data: SignUpRequest) => {  
        
       console.log(`data`, data);
       
    }

    return (
       <form className='loginForm flex flex-col gap-y-5 max-w-[400px] relative' onSubmit={handleSubmit(onSubmit)}>
        <legend className="text-black font-bold text-[30px] text-center">Sign up</legend>
        <p className='text-gray-400'>Already have an account? <Link className='text-violet' to={'/sign-in'}>Sign in here</Link></p>
        <fieldset className="flex justify-between gap-x-2">
         <div className="flex justify-between flex-col">
            {!errors.firstName ? <label className={`flex flex-col gap-y-1 text-gray-600 text-[12px] flex-grow`} htmlFor="first">First name</label> : <p className="text-violet text-[12px]">{errors.firstName.message}</p>}
         <input 
            className={`border rounded-lg h-[50px] p-2`} 
            id='first' type="text" 
            placeholder="First name"
            {...register('firstName')}
            />
            </div>   

        <div className="flex justify-between flex-col">
            {!errors.lastName ? <label className={`flex flex-col gap-y-1 text-gray-600 text-[12px] flex-grow`} htmlFor="last">Last name</label> : <p className="text-violet text-[12px]">{errors.lastName.message}</p>}
            <input 
            className={`border rounded-lg h-[50px] p-2`} 
            id='last' 
            type="text" 
            {...register('lastName')}
            placeholder="Last name"/>
             </div>
        </fieldset>

        <div className="flex justify-between flex-col">
            {!errors.login ?  <label className={`flex flex-col gap-y-1 text-gray-600 text-[12px]`} htmlFor="login">Login</label> : <p className="text-violet text-[12px]">{errors.login.message}</p>}
            <input 
            className={`border rounded-lg h-[50px] p-2`} 
            id='login' type="text" 
            {...register('login')}
            placeholder="Login"/>
        </div>
            
        <div className="flex justify-between flex-col">
            {!errors.password ?  <label className={`flex flex-col gap-y-1 text-gray-600 text-[12px]`} htmlFor="password">Password</label> : <p className="text-violet text-[12px]">{errors.password.message}</p>}
            <input 
            className={`border rounded-lg h-[50px] p-2`} 
            id='password' 
            type="password" 
            {...register('password')}
            placeholder="Password"/>
        </div>
            
        <div className="flex justify-between flex-col">
            {!errors.password_confirm ?  <label className={`flex flex-col gap-y-1 text-gray-600 text-[12px]`} htmlFor="passwordc">Confirm password</label> : <p className="text-violet text-[12px]">{errors.password_confirm.message}</p>}
            <input 
            className={`border rounded-lg h-[50px] p-2`} 
            id='passwordc' 
            type="password" 
            {...register('password_confirm')}
            placeholder="Password"/>
        </div>
       
            

        <fieldset className="flex gap-x-2">
        <input required id="agree" type="checkbox" />
        <label htmlFor="agree" className="text-[14px]">
        By clicking Create an account, I agree that i have read and accepted  
        <Link className="text-violet text-[14px]" to={'/'}>Terms of use</Link> and <Link className="text-violet text-[14px]" to={'/'}>Privacy policy</Link>
        </label>
        </fieldset>

        <button className={`bg-violet text-white border rounded-lg h-[50px]`} type="submit">Create an account</button>
    </form>
       
    )
}