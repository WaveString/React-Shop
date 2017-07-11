import React, { PropTypes, Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket';
import styles from './index.css';

const paperStyle = {
    width: 220,
    margin: 20
};
const buttonStyle = {
    marginTop: 10,
    width: '100%'
};

export default class ProductItem extends Component {
    static propTypes = {
        product: PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    handleOnAddInBasket() {
        const { product, onAddInBasket } = this.props;
        onAddInBasket(product);
    }

    render() {
        const { product } = this.props;
        return (
            <Paper style={paperStyle} zDepth={5} rounded={false} >
                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={product.img} alt={ product.name }/>
                </div>
                <div className={styles.footer}>
                    <div className={styles.name}>
                        { product.name }
                    </div>
                    <div className={styles.price}>
                        Цена: { product.price + ' $'}
                    </div>
                    <div>
                        Доступно: { product.count }
                    </div>
                    <RaisedButton
                        label="В КОРЗИНУ"
                        style={buttonStyle}
                        secondary={true}
                        icon={<ShoppingBasket/>}
                        onClick={ this.handleOnAddInBasket.bind(this) }/>
                </div>
            </Paper>
        );
    }
}
