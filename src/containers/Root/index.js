import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../../components/DevTools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../App';

import styles from './index.css';

const __DEVELOPMENT__ = process.env.NODE_ENV === 'development';

const Root = ({ store }) => (
    <MuiThemeProvider>
        <Provider store={ store }>
            <div className={styles.wrapper}>
                <App />
                { __DEVELOPMENT__ && <DevTools /> }
            </div>
        </Provider>
    </MuiThemeProvider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
