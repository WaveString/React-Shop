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

// import {} from '../../user';

import styles from './index.css';

export class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const {

        } = this.props;

        return (
            <Router>
                <div>
                    <Header />
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

const mapDispatchToProps = (dispatch) => ({
    initializeValues: (books, sort) => dispatch(initializeValues(books, sort)),
});

export default connect(select, mapDispatchToProps)(App);
