import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';


//Context is used for Data of StateChange

const ShowScreen = ({ navigation,route}) => {
    const { state } = useContext(Context);
    const id_ofPost = route.params.id;

    const blogPost = state.find((blogPost) => blogPost.id == id_ofPost );

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

export default ShowScreen;