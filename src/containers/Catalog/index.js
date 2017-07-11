import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ProductList from "../../components/ProductList/index";
import { fetchProducts, addInBasket } from "../../actions/products";

import styles from './index.css';

export class Catalog extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchProductsAction } = this.props;
        fetchProductsAction();
    }

    render() {
        const { products, onAddInBasket } = this.props;
        return (
            <div className={styles.wrapper}>
                <ProductList {...{ products, onAddInBasket }}/>
            </div>
        );
    }
}

const select = (state) => {
    return {
        products: state.products.list
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProductsAction: (products) => dispatch(fetchProducts(products)),
    onAddInBasket: (product) => dispatch(addInBasket(product))
});

export default connect(select, mapDispatchToProps)(Catalog);
