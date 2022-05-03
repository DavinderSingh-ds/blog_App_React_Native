import React,{useContext} from 'react';
import {Text,View,StyleSheet,FlatList,Button} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    // const value = useContext(BlogContext);
    const { data, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            {/* <Text>{value}</Text> */}
            <Button 
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList 
                data = {data}
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