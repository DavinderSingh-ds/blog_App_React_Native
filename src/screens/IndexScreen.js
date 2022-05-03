import React,{useContext} from 'react';
import {Text,View,StyleSheet,FlatList,Button} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

// import { Context as BlogContext} from '../context/BlogContext';
// import { Context as ImageContext} from '../context/ImageContext';

const IndexScreen = () => {
    // const value = useContext(BlogContext);
    const { state, addBlogPost } = useContext(Context);

    return (
        <View>
            <Text>Index Screen</Text>
            {/* <Text>{value}</Text> */}
            <Button 
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList 
                data = {state}
                //it communicate with array of its key like title is key of blogPosts in BlogContext.js
                keyExtractor = {(blogPost) => blogPost.title}
                renderItem = {({item}) => {
                    return (
                        <View>
                            <Text>
                              {item.title}
                            </Text>
                            <Feather name="trash" />
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default IndexScreen;