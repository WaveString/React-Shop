export const REDIRECT = 'REDIRECT';

export function redirectTo(path) {
    return {
        type: REDIRECT,
        path
    };
}
