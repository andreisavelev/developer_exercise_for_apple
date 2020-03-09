import React from 'react';


import classes from './Navigation.module.css';

/**
 * Navigation component renders list of NavigationItems
 * @param props {object}
 * @param props.items {object[]}
 * @returns {object}
 */
const navigation = props => (
    <nav className={classes.navigation}>
        <ul className={classes['navigation-list']}>
            {props.items.map(item => {
                return (
                    <li key={item.section}>
                        <a href={item.section}>{item.label}k</a>
                    </li>
                );
            })}
        </ul>
    </nav>
);

export default navigation;