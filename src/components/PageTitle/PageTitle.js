import React from "react";

/**
 * Simple page title renders 1st level header
 * @param title {string}
 * @returns {object}
 */
const PageTitle = ({title}) => {
    return (
        <h1>{title}</h1>
    );
};

export default PageTitle;