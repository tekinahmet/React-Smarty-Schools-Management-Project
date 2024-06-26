
import { EncryptStorage } from 'encrypt-storage';

const key = import.meta.env.VITE_APP_KEY;

if(!key) throw new Error('key not found');

const encryptStorage = new EncryptStorage(key);

export const setLocalStorage = (key, value) => {
  encryptStorage.setItem(key, value);
};
export const getLocalStorage = (key) => {
  return encryptStorage.getItem(key);
};
export const removeLocalStorage = (key) => {
  encryptStorage.removeItem(key);
};

