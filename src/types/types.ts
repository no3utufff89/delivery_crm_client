
import { LucideIcon } from 'lucide-react';

export type AsideMenuItem = {
    title: string;
    url: string;
    icon: LucideIcon;
    iconColor: string;
    russianTitle: string,
  };

 export type SimpleTextBlock = {
  title:string;
  text: string;
 }

 export interface FormProps {
  formTitle: string
}

 export interface SettingsType {
  isActive: boolean;
  currentPageTitle: string | undefined;
  defaultText: SimpleTextBlock,
  isModalOpen: boolean;
}

//===================USER TYPES==========================//

export interface User {
  id: string,
  role: string,
  login: string,
  password: string,
  password_confirm: string,
  firstName: string,
  lastName: string,
}

//=================REGISTRATION========================//


export type SignUpRequest = Omit<User, 'id'| 'role'|'avatar'|'password_confirm'>;

export type SignUpResponse = Omit<User, 'avatar'|'password_confirm'|'password'| 'role'>;


//===================LOGIN===========================//

export type SignInRequest = Pick<User, "login"| "password">;

export type SignInResponse = Omit<User, 'avatar'| 'password_confirm'| 'password'>;


export interface AuthResponse<T> {
  accsessToken: string;
  refreshToken: string;
  user: T;
}
//======================================================//
export interface AuthState<T> {
  user?: T | null;
  error?: AuthErrorResponse;
  isLoading: boolean;
  isAuthenticated: boolean;
  token?: string | null;
}
export type AuthErrorResponse = {
  message: string;
  statusCode: number;
  errors: {
    userNameError: string;
    passwordError: string;
  }

}






