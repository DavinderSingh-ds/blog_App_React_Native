import React, { createContext } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    return (
        <BlogContext.Provider>
            {children}
        </BlogContext.Provider>
    );
};
