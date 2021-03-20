import { ReceiveDocumentPayload } from "../../actions/document/DocumentActions";
import { receiveDocumentActionCreator } from "../../actions/document/DocumentActionsCreator";
import { DocumentsActions, FAILED_DOCUMENTS, RECEIVE_DOCUMENTS, REQUEST_DOCUMENTS } from "../../actions/documents/DocumentsActions";
import { DocumentState, initialState as documentInitialState } from "../../states/document/DocumentState";
import { DocumentsState, initialState } from "../../states/doocuments/DocumentsState";
import documentReducer from "../document/DocumentReducer";

/**
 * Calculates the DocumentsState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {DocumentsState} state
 * @param {DocumentsActions} action
 *
 * @return {DocumentsState}
 */
export default function documentsReducer(state: DocumentsState = initialState, action: DocumentsActions): DocumentsState {
    switch (action.type) {
        case REQUEST_DOCUMENTS:
            return {
                ...state,
                isFetching: true
            }
        case FAILED_DOCUMENTS:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true
            }
        case RECEIVE_DOCUMENTS:
            return {
                ...state,
                isFetching: false,
                byId: byId(state.byId, action.payload.documents),
                allIds: allIds(state.allIds, action.payload.documents)
            }
        default:
            return state;
    }
}

function byId(byIdP: Map<number, DocumentState>, documentsP: Array<ReceiveDocumentPayload>): Map<number, DocumentState> {
    let updatedById = byIdP;

    documentsP.forEach((documentP) => {
        let document: DocumentState;
        if (updatedById.get(documentP.id)) {
            document = documentReducer(updatedById.get(documentP.id), receiveDocumentActionCreator(documentP.id, documentP.name, documentP.documentTypeId, documentP.clientId))
        } else {
            document = {
                ...documentInitialState,
                id: documentP.id,
                name: documentP.name,
                documentTypeId: documentP.documentTypeId,
                clientId: documentP.clientId
            }

        }
        updatedById.set(document.id, document);
    })
    return updatedById;
}

function allIds(allIdsP: Array<number>, documentsP: Array<ReceiveDocumentPayload>): Array<number> {
    let updatedAllIds: Array<number> = [...allIdsP];

    documentsP.forEach((documentP) => {
        updatedAllIds.push(documentP.id);
    })
    return updatedAllIds;
}