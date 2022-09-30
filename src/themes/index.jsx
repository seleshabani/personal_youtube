import React from "react"
import { ThemeProvider } from "styled-components"
import { Theme } from "./theme"
import { ThemeVars } from "./variables"

export const Styles = ()=>{
    return (
            //appel du contexte pour le theme
        <ThemeProvider theme={ThemeVars}>
            <Theme/>
        </ThemeProvider>
    )
}