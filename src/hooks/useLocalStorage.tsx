import {useState, useEffect} from "react";

function getStorageValue(key: string, defaultValue: string): string {
    // get the stored value
    const saved = String(localStorage.getItem(key));
    const initial = saved !== null ? JSON.parse(saved) as string : defaultValue;
    return initial || defaultValue;

}

export function useLocalStorage(key: string, defaultValue: string): [string, (value: string) => void] {
    
    const [value, setValue] = useState( ()=> {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;