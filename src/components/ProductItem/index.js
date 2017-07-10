import React, { PropTypes, Component } from 'react';
import styles from './index.css';

export default class ProductItem extends Component {
    static propTypes = {
        product: PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { product } = this.props;
        return (
            <div className={styles.wrapper} onClick={this.handleClickOnIcon}>
                { product.name }
            </div>
        );
    }
}
