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
    state = {
        navigation: {
            cities: []
        }
    };

    componentDidMount() {
        // fetch navigation items
        fetchData('./data/navigation.json')
            .then(res => this.setState({
                navigation: {
                    cities: res.cities
                }
            }));
    }

    /**
     * Handle the click event on the navigation link
     * @param event
     * @param clickedItem
     */
    onClickedMenuItemHandler = (event, clickedItem) => {
        event.preventDefault();

        console.log(clickedItem);
    };

    render() {
        return (
            <Layout>
                <Navigation items={this.state.navigation.cities}
                            clickedMenuItem={this.onClickedMenuItemHandler}/>
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
