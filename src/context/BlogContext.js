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
    //now return is a new function if any goes wrong with api then we dont't dispatch we just callback()
    return ( title, content, callback ) => {
            dispatch({ type: 'add_blogpost', payload: {title:title, content: content} });
            callback();       
    };
};    

//if payload === idofPost to delete, type == what to delete
const deleteBlogPost = (dispatch) => {
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




// in case of dealing with Api's    
// const addBlogPost = function(dispatch) {
//     //now return is a new function if any goes wrong with api then we dont't dispatch we just callback()
//     return async ( title, content, callback ) => {
//         try {
//             await axios.post('alskdjf',title, content)
//             dispatch({ type: 'add_blogpost', payload: {title, content} });
//             callback();
//         } catch (e) {            
//         }       
//     };  