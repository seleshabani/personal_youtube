import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App';
import { CustomThemeProvider } from './context/customTheme'
import { UserLoginStatusProvider } from './context/userLoginStatus'
import { Styles } from './themes'
import { CommmentContextProvider } from './context/commentContex';
import { UpdateprofileProvider } from './context/updateUserProfil';
import ErrorBoundary from './hooks/ErrorBundary.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<CustomThemeProvider>
			<Styles>
				<UpdateprofileProvider>
					<UserLoginStatusProvider>
						<CommmentContextProvider>
								<App />
						</CommmentContextProvider>
					</UserLoginStatusProvider>
				</UpdateprofileProvider>
			</Styles>
		</CustomThemeProvider>
	</BrowserRouter>
	
)