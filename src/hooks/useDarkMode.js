import { useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage.js';


export const useDarkMode = (key, initialValue) => {
    const [darkmode, setDarkmode] = useLocalStorage(key, initialValue);

    const toggleMode = e => {
        e.preventDefault();
        setDarkmode(!darkmode);
    };

    useEffect(() => {
        if (darkmode === false) {
            document.querySelector("body").classList.remove('dark');
        }
        if (darkmode === true) {
            document.querySelector("body").classList.toggle("dark");
        }
    }, [darkmode]);
    return [darkmode, toggleMode];

};

// FIRST ATTMEPT
// function useDarkMode() {
// const [theme, setTheme] = useState('light');
// // const colorTheme = theme === 'light' ? 'light' : 'dark'
// useEffect(() => {
//     const root = window.document.documentElement
//     console.log('root', root.classList.value, 'theme', theme);
//     root.classList.remove(!theme)
//     root.classList.add(theme)
//     // root.classList.value.
// }, [theme])
// return(
//     [theme, setTheme]
// )
// };
// export default useDarkMode;