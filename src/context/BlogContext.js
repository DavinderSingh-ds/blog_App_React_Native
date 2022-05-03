import React from 'react';

const BlogContext = React.createContext();

// Blog Provider is not default 
export const BlogProvider = ({ children }) => {

    return (
        <BlogContext.Provider value = {["Hi I am Davinder"," "," Hi guys"," ",1," ",2," ",4]}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;