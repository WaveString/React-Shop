import { REDIRECT } from '../actions/router';

export const routerMiddleware = (history) => store => next => action => {
    next(action);

    if (action.type === REDIRECT) {
        history.push(action.path);
    }
};
