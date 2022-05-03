import createDataContext from './createDataContext';

//here state is blogPosts
const blogReducer = function (state, action) {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state,
                { 
                    title: `BlogPost #${state.length + 1}` 
                },
            ];       
        default:
            return state;
    }
};

const addBlogPost = function(dispatch) {
    //now return is a new function
    return () => {
        dispatch({ type: 'add_blogpost' });
        //dispatch is modifier state
    };  
};

//destructured out  Context and Provider that comes from createDataContext.js
export const { Context, Provider} = createDataContext(  
    blogReducer, 
    { addBlogPost },
    []
);