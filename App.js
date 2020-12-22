import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import additionalRoutes from './bundle/additionalRoutes'
import LandingPage from './src/apps/landingpage'

const RootNavigator = createStackNavigator(
	{
		Home: {
			screen: LandingPage,
			navigationOptions: () => ({
				headerShown: false,
			}),
		},
		...additionalRoutes,
	},
	{
		initialRouteName: 'Home',
	},
)

export default createAppContainer(RootNavigator)
