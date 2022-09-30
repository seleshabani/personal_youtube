import { useState,createContext } from "react";

export const CustomThemeContext = createContext();

export const CustomThemeProvider = ({children})=>{
    const [theme,setTheme] = useState('light');

    const themeSwitcher = ()=>{
        setTheme(theme==='light'?'dark':'light')
    }
    return (
        <CustomThemeContext.Provider value={{theme,themeSwitcher}}>
            {children}
        </CustomThemeContext.Provider>
    )
}

