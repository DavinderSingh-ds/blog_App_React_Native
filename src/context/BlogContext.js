import React from 'react';

const BlogContext = React.createContext();

// Blog Provider is not default 
export const BlogProvider = ({ children }) => {
    const blogPosts = [
        {title : 'Blog Post #1'},
        {title : 'Blog Post #2'},
    ];

    return (
        // <BlogContext.Provider value = {["Hi I am Davinder"," "," Hi guys"," ",1," ",2," ",4]}>
        //     {children}
        // </BlogContext.Provider>
        <BlogContext.Provider value = {blogPosts}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;