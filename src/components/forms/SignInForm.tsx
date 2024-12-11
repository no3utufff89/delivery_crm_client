import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { SignInRequest } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { signInUserRequest } from "../../store/slices/userSlice/requests";
import { useEffect } from "react";
import { MoonLoader } from "react-spinners";

export const SignInForm = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const hasError = useAppSelector(state => state.user.error);
   const isLoading = useAppSelector(state => state.user.isLoading);
   const isAuth = useAppSelector(state => state.user.isAuthenticated);
   const userNameError = hasError?.errors.userNameError;
   const passwordError = hasError?.errors.passwordError;

useEffect(() => {
    setError('login', {
        message: userNameError
    })
    setError('password', {
        message: passwordError
    })
},[hasError])
useEffect(() => {
    if(isAuth) {
        navigate('/');
    }
},[isAuth])

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SignInRequest>();

    const onSubmit = (data: SignInRequest) => {
        // submit data to your server here
      console.log(data);
      dispatch(signInUserRequest(data))
      
    }
    
    return (
        <div>
            {isLoading ? <MoonLoader color="#7662ea"/> : <form className='loginForm flex flex-col gap-y-3 max-w-[300px] relative' onSubmit={handleSubmit(onSubmit)}>
            <legend className="text-black font-bold text-[30px] text-center">Sign in</legend>
            <p className='text-gray-400'>Don't have an account yet? 
                <Link className='text-violet' to={'/sign-up'}> Sign up here</Link>
            </p>
            <div className="flex justify-between flex-col">
                {!errors.login || !hasError?.errors.userNameError ?  <label
                className={`flex flex-col gap-y-1 text-gray-600 text-[12px]`}
                htmlFor="login">
                Login</label> : <p className="text-red-500 text-[12px]">{errors.login.message}</p>}
                <input
                    className={`border rounded-lg h-[50px] p-2`}
                    id='login'
                    type="text"
                    autoComplete="off"
                    {...register('login', {
                        required: 'Please enter your login',
                        minLength: {
                            value: 3,
                            message: 'Login must be at least 3 characters long'
                        },
                        maxLength: {
                            value: 30,
                            message: 'Login must not exceed 20 characters'
                        },
                        pattern: {
                            value: /^[a-zA-Zа-яА-Я0-9]*$/,
                            message: 'Login should not contain spaces, numbers, parentheses, or hyphens'
                        }
                    })}
                    placeholder="Enter login here" />
            </div>
            <div className="flex justify-between flex-col">
                {!errors.password || !hasError?.errors.passwordError ?  <label 
            className={`flex flex-col gap-y-1 text-gray-600 text-[12px]`} 
            htmlFor="password">
                Password</label> : <p className="text-red-500 text-[12px]">{errors.password.message}</p>}
                <input 
                className={`border rounded-lg h-[50px] p-2`} 
                autoComplete="off"
                id='password' 
                type="password" 
                {...register('password', {
                    required: 'Please enter your password',
                    minLength: {
                        value: 3,
                        message: 'Password must be at least 8 characters long'
                    },
                    maxLength: {
                        value: 30,
                        message: 'Password must not exceed 20 characters'
                    },
                    pattern: {
                        value: /^[a-zA-Zа-яА-Я0-9]*$/,
                        message: 'Password should not contain spaces, parentheses, or hyphens'
                    }
                })}
                placeholder="Enter password here" />
            </div>
            <button className={`bg-violet text-white border rounded-lg h-[50px]`} type="submit">Sign in</button>
        </form>}

        </div>
        
    )
}