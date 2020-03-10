import React from "react";

/**
 * Simple page w/ title rendered as 1st level header and current time
 * @param title {string}
 * @param timeZone {string}
 * @returns {object}
 */
const Page = ({title, timeZone}) => {
    const currentTime = timeZone ? new Date().toLocaleString("en-US", {timeZone: timeZone}) : null;

    return (
        <>
            <h1>{title}</h1>
            {currentTime ? <p>Current time is: {currentTime}</p> : null}
        </>
    );
};

export default Page;