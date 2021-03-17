import { useEffect, useState } from 'react';

function useDarkMode() {
const [theme, setTheme] = useState('light');
// const colorTheme = theme === 'light' ? 'light' : 'dark'
useEffect(() => {
    const root = window.document.documentElement
    console.log('root', root.classList.value, 'theme', theme);
    root.classList.remove(!theme)
    root.classList.add(theme)
    // root.classList.value.
}, [theme])
return(
    [theme, setTheme]
)
};
export default useDarkMode;