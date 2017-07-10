import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ProductList from "../../components/ProductList/index";
import { fetchProducts } from "../../actions/products";

import styles from './index.css';

export class Catalog extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var { fetchProducts } = this.props;
        fetchProducts();
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <ProductList/>
            </div>
        );
    }
}

const select = (state) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (products) => dispatch(fetchProducts(products))
});

export default connect(select, mapDispatchToProps)(Catalog);
