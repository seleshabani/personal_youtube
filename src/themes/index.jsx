import React from "react"
import { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { CustomThemeContext } from "../context/customTheme"
import { Theme } from "./theme"
import { ThemeVars } from "./variables"

export const Styles = ({children})=>{
    const {theme} = useContext(CustomThemeContext);
    return (
            //appel du contexte pour le theme
        <ThemeProvider theme={ThemeVars}>
            <Theme isDark={theme}/>
            {children}
        </ThemeProvider>
    )
}