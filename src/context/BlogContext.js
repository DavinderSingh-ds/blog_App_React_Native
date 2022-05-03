import React,{useReducer} from 'react';

const BlogContext = React.createContext();

//here state is blogPosts
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, {title: `BlogPost #${state.length + 1}`}];
        default:
            return state;
    }
};

// Blog Provider is not default 
export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' });  // it ses swith case above
        //dispatch is modifier state
    };

    return (
        <BlogContext.Provider value = {{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;