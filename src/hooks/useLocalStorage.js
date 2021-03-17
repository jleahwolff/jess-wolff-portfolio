
import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export const useLocalStorage = (key, initialValue) => {

const [ storedValue, setStoredValue ] = useState(() => {
    const item = window.localStorage.getItem(key);
    // if else statement
    return item ? JSON.parse(item) : initialValue;
});
const setValue = value => {
    // saving the state to localStorage
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
};
    return [storedValue, setValue];
};