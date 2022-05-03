import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditScreen = ({ navigation, route }) => {
    const id_ofPost = route.params.id;

    return (
        <View>
            <Text>Edit Screen - {id_ofPost}</Text>
        </View>
    );
};

export default EditScreen;