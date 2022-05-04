import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

//here state is blogPosts  //state is current list of blogPost
// actionFunction are add, delete and edit
const blogReducer = function (state, action) {
    switch (action.type) {

        // case 'add_blogpost':
        //     return [
        //         ...state,
        //         { //id for deleting posts
        //             id: Math.floor(Math.random() * 99999),
        //             title: action.payload.title,
        //             content: action.payload.content,
        //         },

        //     ];

        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload );

        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });  
        
        case 'get_blogposts':
            return action.payload;    
        
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
       const response =  await jsonServer.get('/blogposts');

       dispatch({ type: 'get_blogposts', payload: response.data });
    };
};

//now return is a new function if any goes wrong with api then we dont't dispatch we just callback()

const addBlogPost = function(dispatch) {
    return async ( title, content, callback ) => {
        await jsonServer.post('/blogposts', { title: title, content: content });

        // dispatch({ type: 'add_blogpost', payload: {title:title, content: content} });
        
        if (callback) {
            callback();
        }    
    };
};    

//if payload === idofPost to delete, type == what to delete

const deleteBlogPost = (dispatch) => {
    return async (id) =>{
        await jsonServer.delete(`/blogposts/${id}`);
        
        dispatch({ type: 'delete_blogpost', payload: id });
    };
}
const editBlogPost = (dispatch) => {
    // inner function is return   callback has navigation 
    return (id, title, content, callback) => {
        dispatch({ 
            type: 'edit_blogpost', 
            payload: { id: id, title: title, content: content}
        });

        if (callback) {
            callback();   
        }
    };
};

//destructured out  Context and Provider that comes from createDataContext.js
export const { Context, Provider} = createDataContext(  
    blogReducer, 
    { addBlogPost, deleteBlogPost , editBlogPost, getBlogPosts },
    []  
     //this is the initial state
    // [{ title: 'TITLE POST', content : 'TEST CONTENT', id : 1}]
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