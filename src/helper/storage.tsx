import { reactLocalStorage } from 'reactjs-localstorage';

export const setStorage = (key: string, data: any) => {
    return reactLocalStorage.set(key, data);
}

export const getStorage = (key: string) => {
    return reactLocalStorage.get(key);
}


export const clearStorage = () => {
    return reactLocalStorage.clear();
}