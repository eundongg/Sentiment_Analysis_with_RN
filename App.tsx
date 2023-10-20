import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/components/MainScreen';
import Diary from './src/components/Diary';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />        
        <Stack.Screen name="Diary" component={Diary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
