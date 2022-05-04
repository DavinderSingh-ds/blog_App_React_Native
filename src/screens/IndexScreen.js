import React,{useContext, useEffect} from 'react';
import {Text,View,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

// import { Context as BlogContext} from '../context/BlogContext';
// import { Context as ImageContext} from '../context/ImageContext';

const IndexScreen = ({ navigation,route}) => {
    const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context);

    // // linked with api
    // getBlogposts();   useEffect is a hook work with api things 

    useEffect(() => {
        getBlogPosts();
    }, []);

    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate('CreateSc')}}>
                <Text style={{margin: 10}}>
                    <Feather name="plus" size={30} color = 'red' />
                </Text>
            </TouchableOpacity>
            
            
            {/* <Button 
                title="Add Post"
                onPress={addBlogPost}
            /> */}
            <FlatList 
                data = {state}
                //it communicate with array of its key like title is key of blogPosts in BlogContext.js
                keyExtractor = {(blogPost) => blogPost.title}
                renderItem = {({ item }) => {
                    return (
                        // id: item.id tells which post we clicked
                        <TouchableOpacity onPress={() => navigation.navigate('ShowSc', { id: item.id })}>
                            
                            <View style= {styles.row}>
                             <Text style={styles.title}>
                                 {item.title}   {item.content}
                             </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                  <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>

                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

// IndexScreen.navigationOptions = ({navigation}) => {
//      return  {
//        headerRight: <Feather name="plus" size={30} color = 'red' />
//      };
//     }

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