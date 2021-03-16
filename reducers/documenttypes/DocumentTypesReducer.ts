import { ReceiveDocumentTypePayload } from "../../actions/documenttype/DocumentTypeActions";
import { receiveDocumentTypeActionCreator } from "../../actions/documenttype/DocumentTypeActionsCreators";
import { DocumentTypesActions, FAILED_DOCUMENT_TYPES, RECEIVE_DOCUMENT_TYPES, REQUEST_DOCUMENT_TYPES } from "../../actions/documenttypes/DocumentTypesActions";
import { DocumentTypeState, initialState as documentTypeInitialState } from "../../states/documenttype/DocumentTypeState";
import { DocumentTypesState, initialState } from "../../states/documenttypes/DocumentTypesState";
import documentTypeReducer from "../documenttype/DocumentTypeReducer";
/**
 * Calculates the DocumentTypesState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {DocumentTypesState} state
 * @param {DocumentTypesActions} action
 *
 * @return {DocumentTypesState}
 */
export default function documentTypesReducer(state: DocumentTypesState = initialState, action: DocumentTypesActions): DocumentTypesState {
    switch (action.type) {
        case REQUEST_DOCUMENT_TYPES:
            return {
                ...state,
                isFetching: true

            }
        case FAILED_DOCUMENT_TYPES:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true

            }
        case RECEIVE_DOCUMENT_TYPES:
            return {
                ...state,
                isFetching: false,
                byId: byId(state.byId, action.payload.documentTypes),
                allIds: allIds(state.allIds, action.payload.documentTypes)
            }
        default:
            return state;
    }
}

function byId(byIdP: Map<number, DocumentTypeState>, documentTypesP: Array<ReceiveDocumentTypePayload>): Map<number, DocumentTypeState> {
    let updatedById = byIdP;

    documentTypesP.forEach((documentTypeP) => {
        let documentType: DocumentTypeState;
        if (updatedById.get(documentTypeP.id)) {
            documentType = documentTypeReducer(updatedById.get(documentTypeP.id), receiveDocumentTypeActionCreator(documentTypeP.id, documentTypeP.type))
        } else {
            documentType = {
                ...documentTypeInitialState,
                id: documentTypeP.id,
                type: documentTypeP.type,
            }

        }
        updatedById.set(documentType.id, documentType);
    })
    return updatedById;
}

function allIds(allIdsP: Array<number>, documentTypeP: Array<ReceiveDocumentTypePayload>): Array<number> {
    let updatedAllIds: Array<number> = [...allIdsP];

    documentTypeP.forEach((calendarEventP) => {
        updatedAllIds.push(calendarEventP.id);
    })
    return updatedAllIds;
}