import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router-dom';
import styles from './index.css';

const Header = ({ logged }) => (
    <div className={styles.wrapper}>
        <Toolbar style={{ 'backgroundColor': '#212121' }}>
            <ToolbarGroup firstChild={true}>
                <Link to={`/`} className={styles.link}>
                   Магазин
                </Link>
                <Link to={`/`} className={styles.link}>
                    Каталог
                </Link>
                <Link to={`/basket`} className={styles.link}>
                    Корзина
                </Link>
            </ToolbarGroup>
            <ToolbarGroup lastChild={true}>
                { logged ? 'Залогинен' : <Link to={`/login`} className={styles.link}>Логин </Link> }
            </ToolbarGroup>
        </Toolbar>
    </div>
);

Header.propTypes = {
    logged: PropTypes.bool
};

export default Header;
