import { UserType } from "../DataTypes/enums";
//pages interface
import { AxiosRequestConfig } from "axios"
export interface Layoutprops {
}

export interface HomePageProps {
  pageTitle: string;
  pageDescription:string
}

export interface ProtectedPageProps {
  pageTitle: string;
  pageDescription:string
}

export interface LoginFormProps {
  loginTitle: string;
  userType: UserType;
}

//login form state
export interface LoginData {
  id: string;
  password: string;
  userType:UserType;
}

//verify login data
export interface VerifyLoginData{
  id:string,
  otp:string,
  userType:UserType
}
//resend login OTP
export interface ResendOtpData{
  id:string,
  userType:UserType
}

//logged in state
export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
  userType: UserType | null;
}

// api request
export interface RequestOptions {
  method: AxiosRequestConfig['method'];
  url: string;
  data?: unknown; // Allow any data type initially  // $MAJOR
  headers?: AxiosRequestConfig['headers'];
}

// api response success
export interface ApiSuccess {
  statusCode?: number;
  message: string;
  data:object
}

// api response error
export interface ApiError {
  statusCode?: number;
  error: string;
}

//custom error
export interface CustomError {
  error: string;
}