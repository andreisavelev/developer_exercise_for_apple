import React, {Component, useState} from 'react';


import classes from './Navigation.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";


const Navigation = (props) => {
    let [slidingStyle, setSlidingStyle] = useState({
        width: 0,
        left: 0,
        opacity: 0
    });

    let clickedMenuItem = (element, section) => {
        let anchorBounding = null;
        let listBounding = null;
        let slidingNavBar = {};
        let updatedState = {};

        if (element.current) {
            listBounding = element.current.parentNode.getBoundingClientRect();
            anchorBounding = element.current.children[0].getBoundingClientRect();
            slidingNavBar.left = `${Math.round(anchorBounding.left - listBounding.left)}px`;
            slidingNavBar.width = `${Math.round(anchorBounding.width)}px`;

            setSlidingStyle({
                opacity: 1,
                ...slidingNavBar
            });
        }
    };

    return (
        <nav className={classes.navigation}>
            <ul className={classes['navigation-list']}>
                {props.items.map(item => {
                    return (
                        <NavigationItem label={item.label}
                                        key={item.section}
                                        clicked={(element) => clickedMenuItem(element, item.section)}
                                        section={item.section}/>
                    );
                })}

                {/* sliding navigation bar */}
                <li className={[classes['sliding-bar'], 'js-sliding-bar'].join(' ')} style={slidingStyle}/>
            </ul>
        </nav>
    );
};

export default Navigation;