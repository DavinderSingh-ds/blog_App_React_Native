import createDataContext from './createDataContext';

//here state is blogPosts
const blogReducer = function (state, action) {
    switch (action.type) {

        case 'add_blogpost':
            return [
                ...state,
                { //id for deleting posts
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content,
                },

            ];

        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload );

        default:
            return state;
    }
};

const addBlogPost = function(dispatch) {
    //now return is a new function
    return ( title, content ) => {
        dispatch({ type: 'add_blogpost', payload: {title: title, content: content} });
        //dispatch is modifier state
    };  
};

const deleteBlogPost = (dispatch) => {
    //payload === idofPost to delete, type == what to delete
    return (id) =>{
        dispatch({ type: 'delete_blogpost', payload: id })
    };
}

//destructured out  Context and Provider that comes from createDataContext.js
export const { Context, Provider} = createDataContext(  
    blogReducer, 
    { addBlogPost, deleteBlogPost },
    []
);