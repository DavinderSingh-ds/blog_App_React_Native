import React, {useContext} from 'react';

import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation, route }) => {
    const id_ofPost = route.params.id;

    const { state } = useContext(Context);
    
    const blogPost = state.find(
        (blogPost) => blogPost.id === id_ofPost
    );

    return (
        <BlogPostForm 
            initialValues = { { title: blogPost.title, content: blogPost.content} }
            onSubmit={(title, content) => {
                console.log(title, content);
        }}/>
    );
};

export default EditScreen;