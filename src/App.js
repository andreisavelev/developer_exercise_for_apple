import React, {Component} from 'react';
import './App.css';
import classes from './App.css'

import fetchData from "./utils/fetchData";
import Navigation from './components/Navigation/Navigation'

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

    render() {
        return (
            <div className={classes.App}>
                <Navigation items={this.state.navigation.cities}/>
            </div>
        );
    }
}

export default App;
