import React, {useEffect} from 'react'
import Navigation from 'navigation'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
	useEffect(() => SplashScreen.hide(), [])

	return <Navigation isLogged />
}

export default App
