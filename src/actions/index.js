import * as actionType from './types';

export const setUser = user => {

    return {
        type: actionType.SET_USER,
        payload: {
            currentUser: user
        }
        };
    };
    export const clearUser = () => {
        return {
            type: actionType.CLEAR_USER
        }
    }
    