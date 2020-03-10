import React, {useState} from 'react';

import classes from './Navigation.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Navigation = (props) => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes['navigation-list']}>
                {props.items.map(item => {
                    return (
                        <NavigationItem label={item.label}
                                        key={item.section}
                                        clicked={(element) => props.clickedMenuItem(element, item.section)}
                                        section={item.section}/>
                    );
                })}

                {/* sliding navigation bar */}
                <li className={[classes['sliding-bar'], 'js-sliding-bar'].join(' ')}
                    style={props.navigationBarStyle}/>
            </ul>
        </nav>
    );
};

export default Navigation;