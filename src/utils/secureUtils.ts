/* eslint-disable @typescript-eslint/no-explicit-any */
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const SECRET_KEY = import.meta.env.VITE_APP_SECRET_KEY;

const secure = {
  encrypt: (data: any) => {
    const enc = AES.encrypt(data, SECRET_KEY).toString();
    return enc;
  },
  decrypt: (data: any) => {
    const bytes = AES.decrypt(data, SECRET_KEY);
    return bytes.toString(Utf8) || null;
  },
};

export default secure;
