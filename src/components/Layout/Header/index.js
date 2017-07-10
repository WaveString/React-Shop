import React, { PropTypes } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { Link } from 'react-router-dom';
import styles from './index.css';

const Header = ({ logged }) => (
    <div className={styles.wrapper}>
        <Toolbar>
            <ToolbarGroup firstChild={true}>
                <Link to={`/`}>
                   Магазин
                </Link>
                <Link to={`/`}>
                    Каталог
                </Link>
                <Link to={`/basket`}>
                    Корзина
                </Link>
            </ToolbarGroup>
            <ToolbarGroup lastChild={true}>
                { logged ? 'Залогинен' : <Link to={`/login`}>Логин </Link> }
            </ToolbarGroup>
        </Toolbar>
    </div>
);

Header.propTypes = {
    logged: PropTypes.bool
};

export default Header;
