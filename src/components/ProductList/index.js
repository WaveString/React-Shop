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
        const {products = []} = this.props;
        return (
            <div className={styles.wrapper}>
                { products.map(item => <ProductItem />) }
            </div>
        );
    }
}
