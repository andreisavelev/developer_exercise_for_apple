import React from "react";
import {NavLink} from "react-router-dom";

import classes from './NavigationItem.module.css';

/**
 * Simple navigation item defined as <code><li></li></code> element
 * that contains <code><a></a></code> element
 * @param section {string}
 * @param label {string}
 * @param clicked {function}
 * @returns {object}
 */
const navigationItem = ({section, label, clicked}) => {
    const isActive = function (match, location) {
        if (!match) {
            return false;
        }

        console.log('clicked', location, match);

        return true;
    };

    return (
        <li className={classes['navigation-item']}>
            <NavLink to={section}
                     className={classes['navigation-item__link']}
                     activeClassName={classes['navigation-item__link--active']}
                     isActive={isActive}>
                {label}
            </NavLink>


        </li>
    );
};

export default navigationItem;