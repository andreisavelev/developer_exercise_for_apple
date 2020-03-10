import React, {Component} from 'react';
import './App.css';
import classes from './App.css'

import fetchData from "./utils/fetchData";
import Layout from "./components/Layout/Layout";
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
            </Layout>
        );
    }
}

export default App;
