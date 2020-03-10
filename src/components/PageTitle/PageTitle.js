import React from "react";

/**
 * Simple page title renders 1st level header
 * @param title {string}
 * @param timeZone {string}
 * @returns {object}
 */
const PageTitle = ({title, timeZone}) => {
    const currentTime = timeZone ? new Date().toLocaleString("en-US", {timeZone: timeZone}) : null;

    return (
        <>
            <h1>{title}</h1>
            {currentTime ? <p>Current time is: {currentTime}</p> : null}
        </>
    );
};

export default PageTitle;