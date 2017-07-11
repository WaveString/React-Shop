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

    componentDidMount() {
        var data = new FormData();
        data.append( "json", JSON.stringify( {
            login: 'admin',
            password: 'admin'
        } ) );
        fetch(`${process.env.API_URL}/login`, {
            method: 'POST',
            body: data
        });
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
