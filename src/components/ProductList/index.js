import React, { PropTypes, Component } from 'react';
import ProductItem from '../ProductItem';
import styles from './index.css';

export default class ProductList extends Component {
    static propTypes = {
        products: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { products, onAddInBasket } = this.props;
        console.log('this.props', this.props);
        return (
            <div className={styles.wrapper}>
                { products.map((product, i)=> <ProductItem {...{ product, onAddInBasket }} key={i}/>) }
            </div>
        );
    }
}
