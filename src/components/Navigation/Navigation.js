import React from 'react';

import classes from './Navigation.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";

/**
 * Navigation component
 * @param items {object[]}
 * @param clickedMenuItem {function}
 * @param navigationBarStyle {object}
 * @returns {object}
 */
const Navigation = ({items, clickedMenuItem, navigationBarStyle}) => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes['navigation-list']}>
                {items.map(item => {
                    return (
                        <NavigationItem label={item.label}
                                        key={item.section}
                                        clicked={(element) => clickedMenuItem(element, item.section)}
                                        section={item.section}/>
                    );
                })}

                {/* sliding navigation bar */}
                <li className={[classes['sliding-bar'], 'js-sliding-bar'].join(' ')}
                    style={navigationBarStyle}/>
            </ul>
        </nav>
    );
};

export default Navigation;