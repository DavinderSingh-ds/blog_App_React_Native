import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';


//Context is used for Data of StateChange

const ShowScreen = ({ navigation,route}) => {
    const { state } = useContext(Context);
    const id_ofPost = route.params.id;

    const blogPost = state.find((blogPost) => blogPost.id == id_ofPost );

    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate('EditSc')}}>
                <Text style={{margin: 10}}>
                    <EvilIcons name="pencil" size={35} color = 'blue' />
                </Text>
            </TouchableOpacity>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

// ShowScreen.navigationOption = () => {
//     return (
//         headerRight: 
//     );
// }

export default ShowScreen;