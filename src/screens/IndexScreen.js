import React,{useContext} from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    // const value = useContext(BlogContext);
    const blogPosts = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            {/* <Text>{value}</Text> */}
            <FlatList 
                data = {blogPosts}
                //it communicate with array of its key like title is key of blogPosts in BlogContext.js
                keyExtractor = {(blogPost) => blogPost.title}
                renderItem = {({item}) => {
                    return (
                        <Text>
                            {item.title}
                        </Text>
                    );
                }}
            />
        </View>
    );
};

export default IndexScreen;