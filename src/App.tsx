import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeScreen,
  NameInputScreen,
  PreTestScreen,
  ResultScreen,
  TestScreen,
} from './screens';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NameInput" component={NameInputScreen} />
          <Stack.Screen name="PreTest" component={PreTestScreen} />
          <Stack.Screen name="Test" component={TestScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
