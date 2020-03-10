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
        },

        slidingNavBar: {
            left: 0,
            opacity: 0,
            width: 0
        }
    };

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

                this.setState(updatedNavigation);
            });
    }

    render() {
        return (
            <Layout>
                <Navigation items={this.state.navigation.cities}
                            navigationBarStyle={this.state.navigation.slidingNavBar}/>
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
