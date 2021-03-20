import { DocumentActions, FAILED_DOCUMENT, RECEIVE_DOCUMENT, REQUEST_DOCUMENT } from "../../actions/document/DocumentActions";
import { DocumentState, initialState } from "../../states/document/DocumentState";

/**
 * Calculates the DocumentState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {DocumentState} state
 * @param {DocumentActions} action
 *
 * @return {DocumentState}
 */
export default function documentReducer(state: DocumentState = initialState, action: DocumentActions): DocumentState {
    switch (action.type) {
        case REQUEST_DOCUMENT:
            return {
                ...state,
                isFetching: true
            }
        case FAILED_DOCUMENT:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true
            }
        case RECEIVE_DOCUMENT:
            return {
                ...state,
                isFetching: false,
                id: action.payload.id,
                name: action.payload.name,
                documentTypeId: action.payload.documentTypeId,
                clientId: action.payload.clientId
            }
        default:
            return state;
    }
}