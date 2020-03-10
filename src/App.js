import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import fetchData from "./utils/fetchData";
import Layout from "./components/Layout/Layout";
import Navigation from './components/Navigation/Navigation';
import Header from "./components/Herader/Header";

/**
 * @class
 * @classdesc The application's main class
 */
class App extends Component {
    constructor(props) {
        super(props);

        // Avoiding memory leaks
        window.removeEventListener('resize', this.onWindowResizeHandler);
        window.addEventListener('resize', this.onWindowResizeHandler);
    }

    state = {
        navigation: {
            cities: []
        },

        navigationBarStyle: {
            width: 0,
            left: 0,
            opacity: 0
        }
    };

    __resizeId = null;

    componentDidMount() {
        // fetch navigation items
        fetchData('./data/navigation.json')
            .then(res => {
                const updatedNavigation = {
                    navigation: {
                        ...this.state.navigation,
                        cities: res.cities
                    }
                };

                this.setState(updatedNavigation, () => {
                    // Hack to show sliding navigation bar on init
                    window.dispatchEvent(new Event('resize'));
                });
            });
    }

    getCalculatedElementPosition = (anchor, list) => {
        let anchorBounding = anchor.getBoundingClientRect();
        let listBounding = list.getBoundingClientRect();

        return {
            width: `${Math.round(anchorBounding.width)}px`,
            left: `${Math.round(anchorBounding.left - listBounding.left)}px`
        };
    };

    setCorrectSlidingNavBarPosition = () => {
        const activeAnchor = document.querySelector('.js-active-link');
        let list = null;


        if (activeAnchor) {
            list = activeAnchor.parentNode.parentNode;
            this.setState({
                navigationBarStyle: {
                    ...this.getCalculatedElementPosition(activeAnchor, list),
                    opacity: 1
                }
            });
        }
    };

    clickedMenuItemHandler = (element, section) => {
        if (element.current) {
            this.setState({
                navigationBarStyle: {
                    ...this.getCalculatedElementPosition(
                        element.current.children[0],
                        element.current.parentNode
                    ),
                    opacity: 1
                }
            });
        }
    };

    onWindowResizeHandler = () => {
        clearTimeout(this.__resizeId);

        // firing calculation only when resizing is finished
        this.__resizeId = setTimeout(this.setCorrectSlidingNavBarPosition, 300);
    };

    render() {
        return (
            <Layout>
                <Navigation items={this.state.navigation.cities}
                            clickedMenuItem={this.clickedMenuItemHandler}
                            navigationBarStyle={this.state.navigationBarStyle}/>
                <Switch>
                    {/* Root route */}
                    <Route path={'/'}
                           exact
                           render={() => <h2>Please, select the city</h2>}/>

                    {/* List of routes */}
                    {this.state.navigation.cities.map(city => {
                        return <Route key={city.section}
                                      path={`/${city.section}`}
                                      component={Header}/>
                    })}
                </Switch>
            </Layout>
        );
    }
}

export default App;
