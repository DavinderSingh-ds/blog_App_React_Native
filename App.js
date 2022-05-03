import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexSc">

        <Stack.Screen 
            name="IndexSc"
            component={IndexScreen} 
            options={{ title: 'Index Screen' }}
            />  

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default () => {
  return (
    <BlogProvider>
      <Navigator />
    </BlogProvider>
  );   
};