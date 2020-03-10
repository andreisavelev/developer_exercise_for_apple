import React from 'react';


import classes from './Navigation.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";

/**
 * Navigation component renders list of NavigationItems
 * @param items {object[]}
 * @param clickedMenuItem {function}
 * @returns {object}
 */
const navigation = ({items, clickedMenuItem}) => (
    <nav className={classes.navigation}>
        <ul className={classes['navigation-list']}>
            {items.map(item => {
                return (
                    <NavigationItem label={item.label}
                                    key={item.section}
                                    clicked={(event) => clickedMenuItem(event, item.section)}
                                    section={item.section} />
                );
            })}

            {/* sliding navigation bar */}
            <li className={classes['sliding-bar']}></li>
        </ul>
    </nav>
);

export default navigation;