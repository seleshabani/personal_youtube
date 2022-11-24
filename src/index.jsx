import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App';
import { CustomThemeProvider } from './context/customTheme'
import { UserLoginStatusProvider } from './context/userLoginStatus'
import { Styles } from './themes'
import { CommmentContextProvider } from './context/commentContex';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<CustomThemeProvider>
			<Styles>
				<UserLoginStatusProvider>
					<CommmentContextProvider>
						<App />
					</CommmentContextProvider>
				</UserLoginStatusProvider>
			</Styles>
		</CustomThemeProvider>
	</BrowserRouter>
	
)