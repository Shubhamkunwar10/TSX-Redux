//pages interface
import { AxiosRequestConfig } from "axios"
export interface Layoutprops {
}

export interface HomePageProps {
  pageTitle: string;
  pageDescription:string;
}

//tab title

export interface ProtectedPageProps {
  pageTitle: string;
  pageDescription:string
}

//login form state
export interface LoginData {
  email: string;
  password: string;
}

export interface CollectionInfo {
  collectionAddress:string
}

//logged in state
export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
  userType: string | null;
}

// api request
export interface RequestOptions {
  method: AxiosRequestConfig['method'];
  url: string;
  data?: unknown; // Allow any data type initially  // $MAJOR
  headers?: AxiosRequestConfig['headers'];
  loadingMessage?:unknown
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



///Nft Page

export interface NFTCollectionState {
  nfts: unknown[];
}
export interface BlogsState {
  blogs: Ipost[];
}

export interface BalanceItem {
  metadata?: {
    name: string;
    id: string;
    image: string;
  };
  historyLink?: string;
}


//interfaces for post
export interface Ipost  {
  _id?: string;
  title: string;
  description?: string;
  image:string;
  author:string;
  categories: string[];
  date?: string;
  cryptoSymbol:string;
  cryptoData?: CryptoData;
}

export interface CryptoData {
  cryptoSymbol:string;
  currency: string;
  price: number;
  marketCap: number;
}

//crypto comp
export interface CryptoInfoProps{
  _id: string;
  cryptoSymbol?:string;
  currency?:string
}

export interface BlogDetailsProps{
  _id:string
}

export interface SocialProfileProps{
  cryptoSymbol?:string;
  discordLink?:string
  facebookLink?:string
  twitterLink?:string
  linkedinLink?:string
  instagramLink?:string
  redditLink?:string
}

// todo later fetch based on userType
export interface FetchBlogData{
  userType:string
}

