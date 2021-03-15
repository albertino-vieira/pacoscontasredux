import { FAILED_REQUEST_STATUS, RECEIVE_REQUEST_STATUS, RequestStatusActions, REQUEST_REQUEST_STATUS } from "../../actions/resqueststatus/RequestStatusActions";
import { initialState, RequestStatusState } from "../../states/requeststatus/RequestStatusState";

/**
 * Calculates the RequestStatusState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {RequestStatusState} state
 * @param {RequestStatusActions} action
 *
 * @return {RequestStatusState}
 */
export default function requestStatusReducer(state: RequestStatusState = initialState, action: RequestStatusActions): RequestStatusState {
    switch (action.type) {
        case REQUEST_REQUEST_STATUS:
            return {
                ...state,
                isFetching: true
            }
        case FAILED_REQUEST_STATUS:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true
            }
        case RECEIVE_REQUEST_STATUS:
            return {
                ...state,
                isFetching: false,
                id: action.payload.id,
                status: action.payload.status
            }
        default:
            return state;
    }
}