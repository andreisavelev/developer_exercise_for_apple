import React, {useRef} from "react";
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
const NavigationItem = ({section, label, clicked}) => {
    const listItemRef = useRef(null);

    return (
        <li className={classes['navigation-item']}
            onClick={() => clicked(listItemRef)}
            ref={listItemRef}>
            <NavLink to={section}
                     className={classes['navigation-item__link']}
                     activeClassName={[classes['navigation-item__link--active'], 'js-active-link'].join(' ')}>
                {label}
            </NavLink>


        </li>
    );
};

export default NavigationItem;