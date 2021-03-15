import { FAILED_REQUEST, RECEIVE_REQUEST, RequestActions, REQUEST_REQUEST } from "../../actions/request/RequestActions";
import { initialState, RequestState } from "../../states/request/RequestState";

/**
 * Calculates the RequestState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {RequestState} state
 * @param {RequestActions} action
 *
 * @return {RequestState}
 */
export default function requestReducer(state: RequestState = initialState, action: RequestActions): RequestState {
    switch (action.type) {
        case REQUEST_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FAILED_REQUEST:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true
            }
        case RECEIVE_REQUEST:
            return {
                ...state,
                isFetching: false,
                id: action.payload.id,
                requestTypeId: action.payload.requestTypeId,
                requestDate: action.payload.requestDate,
                description: action.payload.description,
                statusId: action.payload.statusId,
                hasFile: action.payload.hasFile,
                fileUrl: action.payload.fileUrl
            }
        default:
            return state;
    }
}