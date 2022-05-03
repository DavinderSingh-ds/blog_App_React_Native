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
                        <View style= {styles.row}>
                            <Text style={styles.title}>
                              {item.title}
                            </Text>
                            <Feather style={styles.icon} name="trash" />
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize:24
    }
});

export default IndexScreen;