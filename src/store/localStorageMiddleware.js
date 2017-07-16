export const localStorageMiddleware = store => next => action => {
    const previousToken = store.getState().user.data.token;
    next(action);
    const nextToken = store.getState().user.data.token;

    if (nextToken !== previousToken) {
        localStorage.setItem('token', nextToken);
    }
};
