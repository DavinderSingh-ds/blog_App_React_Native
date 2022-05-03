import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexScreen from './src/screens/IndexScreen';

const Stack = createNativeStackNavigator();

const navigator = () => {
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

export default navigator;