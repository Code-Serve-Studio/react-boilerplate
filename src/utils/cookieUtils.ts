import Cookies from 'js-cookie';
import secure from "./secureUtils";
import { COOKIES } from '@/constants';

export const setAuth = (item:string) => {
  const dataEncryption = secure.encrypt(item);  
  
  Cookies.set(COOKIES.AUTH, dataEncryption);
};

export const getAuth = () => {
  const authentications = Cookies.get(COOKIES.AUTH) || '';
  const dataDecryption = authentications ? secure.decrypt(authentications) : null;
  return dataDecryption ? dataDecryption : null;
};

export const resetCookie = () => {
  Cookies.remove(COOKIES.AUTH);
  Cookies.remove(COOKIES.USER);
}

export const setUser = (item: string) => {  
  const dataEncryption = secure.encrypt(item);  
  
  Cookies.set(COOKIES.USER, dataEncryption);
}

export const getUser = () => {
  const authentications = Cookies.get(COOKIES.USER) || '';
  const dataDecryption = authentications ? secure.decrypt(authentications) : null;
  return dataDecryption ? dataDecryption : null;
};