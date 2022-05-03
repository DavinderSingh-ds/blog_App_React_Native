import React, {useState, useContext} from 'react';
import { View, Text, TextInput,StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation, route }) => {
    const id_ofPost = route.params.id;

    const { state } = useContext(Context);
    
    const blogPost = state.find(
        (blogPost) => blogPost.id === id_ofPost
    );

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            {/* <Text>Edit Screen - {id_ofPost}</Text> */}
            <Text>Edit Title: </Text>
            <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
        </View>
    );
};

export default EditScreen;