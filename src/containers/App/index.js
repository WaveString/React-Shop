import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Layout/Header';

import Catalog from '../Catalog';
import Basket from '../Basket';
import Auth from '../Auth';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import styles from './index.css';

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;

        return (
            <Router>
                <div className={styles.container}>
                    <Header {...{ user }}/>
                    <Route exact path="/" component={Catalog}/>
                    <Route path="/basket" component={Basket}/>
                    <Route path="/login" component={Auth}/>
                </div>
            </Router>
        );
    }
}

const select = (state) => {
    return {
        user: state.user
    };
};

export default connect(select)(App);
