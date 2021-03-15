import { RequestTypeActions, REQUEST_REQUEST_TYPE, FAILED_REQUEST_TYPE, RECEIVE_REQUEST_TYPE } from "../../actions/requesttype/RequestTypeActions";
import { initialState, RequestTypeState } from "../../states/requesttype/RequestTypeState";

/**
 * Calculates the RequestTypeState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {RequestTypeState} state
 * @param {RequestTypeActions} action
 *
 * @return {RequestTypeState}
 */
export default function requestTypeReducer(state: RequestTypeState = initialState, action: RequestTypeActions): RequestTypeState {
    switch (action.type) {
        case REQUEST_REQUEST_TYPE:
            return {
                ...state,
                isFetching: true
            }
        case FAILED_REQUEST_TYPE:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true
            }
        case RECEIVE_REQUEST_TYPE:
            return {
                ...state,
                isFetching: false,
                id: action.payload.id,
                type: action.payload.type,
            }
        default:
            return state;
    }
}