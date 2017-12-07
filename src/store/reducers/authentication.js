import { createAction, createReducer } from 'redux-act'

/**
 * Creators
 */
const loginSuccess = createAction();
const loginFailure = createAction();

/**
 * Thunks
 */
export function login() {
    return function (dispatch) {
        dispatch(loginSuccess());
    }
}

/**
 * Reducer
 */
const defaultState = { authenticated: false }

export default createReducer({
    [loginSuccess]: (state) => ({ ...state, authenticated: true }),
    [loginFailure]: (state, error) => ({ ...state, authenticated: false, error })
}, defaultState);