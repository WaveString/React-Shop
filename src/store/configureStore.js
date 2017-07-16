import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';
import { localStorageMiddleware } from './localStorageMiddleware';
import { routerMiddleware } from './routerMiddleware';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

const configureStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(createLogger(), thunk, localStorageMiddleware, routerMiddleware(history)),
            DevTools.instrument()
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;
