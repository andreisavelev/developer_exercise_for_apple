import React from "react";

import classes from './NavigationItem.module.css';

/**
 * Simple navigation item defined as <code><li></li></code> element
 * that contains <code><a></a></code> element
 * @param section {string}
 * @param label {string}
 * @param clicked {function}
 * @returns {object}
 */
const navigationItem = ({section, label, clicked}) => (
    <li className={classes['navigation-item']}>
        <a href={section}
           className={classes['navigation-item__link']}
           onClick={(event, section) => clicked(event, section)}>
            {label}
        </a>
    </li>
);

export default navigationItem;