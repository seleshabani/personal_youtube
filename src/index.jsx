import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CustomThemeProvider } from './context/customTheme'
import { Styles } from './themes'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<CustomThemeProvider>
			<Styles/>
			<App />
		</CustomThemeProvider>
	</BrowserRouter>
	
)