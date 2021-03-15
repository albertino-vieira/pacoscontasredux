import { DocumentTypeActions, FAILED_DOCUMENT_TYPE, RECEIVE_DOCUMENT_TYPE, REQUEST_DOCUMENT_TYPE } from "../../actions/documenttype/DocumentTypeActions";
import { DocumentTypeState, initialState } from "../../states/documenttype/DocumentTypeState";

/**
 * Calculates the DocumentTypeState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {DocumentTypeState} state
 * @param {DocumentTypeActions} action
 *
 * @return {DocumentTypeState}
 */
export default function documentTypeReducer(state: DocumentTypeState = initialState, action: DocumentTypeActions): DocumentTypeState {
    switch (action.type) {
        case REQUEST_DOCUMENT_TYPE:
            return {
                ...state,
                isFetching: true
            }
        case FAILED_DOCUMENT_TYPE:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true
            }
        case RECEIVE_DOCUMENT_TYPE:
            return {
                ...state,
                isFetching: false,
                id: action.payload.id,
                type: action.payload.type
            }
        default:
            return state;
    }
}