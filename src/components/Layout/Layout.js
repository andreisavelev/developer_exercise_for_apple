import React from "react";

import classes from './Layout.module.css';
/**
 * Layout component
 * @param children {object}
 * @returns {object}
 */
const layout = ({children}) => (
    <div className={classes.layout}>
        {children}
    </div>
);

export default layout;