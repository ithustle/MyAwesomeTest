import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Settings from './screens/Settings';
import Mais from './screens/Mais';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabBarComponent: React.FC<BottomTabBarProps> = (props): JSX.Element => <BottomTabBar {...props} />

const Routes = () => (
	<Stack.Navigator>
		<Stack.Screen name="Index" component={Home}  />
		<Stack.Screen name="Mais" component={Mais} />
	</Stack.Navigator>
)

const Tabs = () => (
	<Tab.Navigator tabBar={(props: BottomTabBarProps) => (
		<>
			<Text style={{ padding: 12 }}>PLAYER</Text>
			<TabBarComponent {...props} />
		</>
	)}>
		<Tab.Screen name="Home" component={Routes} options={{ header: () => null }} />
		<Tab.Screen name="Settings" component={Settings} />
	</Tab.Navigator>
)

const App = () => {
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	);
};

export default App;
