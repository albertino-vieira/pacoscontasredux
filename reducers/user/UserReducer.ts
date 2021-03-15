import { initialState, UserState } from "../../states/user/UserState";
import { RECEIVE_USER, UserActions, REQUEST_USER, FAILED_USER } from "../../actions/user/UserActions";


/**
 * Calculates the UserState given a current state,
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {UserState} state
 * @param {UserActions} action
 *
 * @return {UserState}
 */
export default function userReducer(state: UserState = initialState, action: UserActions): UserState {
    switch (action.type) {
        case REQUEST_USER:
            return {
                ...state,
                isFetching: true
            }
        case FAILED_USER:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true
            }
        case RECEIVE_USER:
            return {
                ...state,
                isFetching: false,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token,
                nif: action.payload.nif,
                role: action.payload.role,
            }
        default:
            return state;
    }
}