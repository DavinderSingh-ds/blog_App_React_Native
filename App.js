import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Provider as BlogProvider } from './src/context/BlogContext';
import { Provider } from './src/context/BlogContext';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexSc">

        <Stack.Screen 
            name="IndexSc"
            component={IndexScreen} 
            options={{ title: 'Index Screen'}}
            />  

        <Stack.Screen 
            name="ShowSc"
            component={ShowScreen} 
            options={{ title: 'Show Screen' }}
            />   

        <Stack.Screen 
            name="CreateSc"
            component={CreateScreen} 
            options={{ title: 'Create Screen' }}
            />    
        <Stack.Screen 
            name="EditSc"
            component={EditScreen} 
            options={{ title: 'Edit Screen' }}
            />      
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <Navigator />
    </Provider>
  );   
};