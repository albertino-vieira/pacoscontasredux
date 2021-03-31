import { ReceiveDocumentTypePayload } from "../documenttype/DocumentTypeActions";
import { CreateDocumentTypesAction, CREATE_DOCUMENT_TYPES, FailedDocumentTypesAction, FAILED_DOCUMENT_TYPES, ReceiveDocumentTypesAction, RECEIVE_DOCUMENT_TYPES, RequestDocumentTypesAction, REQUEST_DOCUMENT_TYPES } from "./DocumentTypesActions";

/**
 * Creates a REQUEST_DOCUMENT_TYPES action.
 * 
 * @return {RequestDocumentTypesAction}
 */
export function requestDocumentTypesActionCreator(): RequestDocumentTypesAction {
    return {
        type: REQUEST_DOCUMENT_TYPES
    };
}

/**
 * Creates a FAILED_DOCUMENT_TYPES action.
 * 
 * @return {FailedDocumentTypesAction}
 */
export function failedDocumentTypesActionCreator(): FailedDocumentTypesAction {
    return {
        type: FAILED_DOCUMENT_TYPES
    };
}

/**
 * Creates a RECEIVE_DOCUMENT_TYPES action.
 * 
 * @return {ReceiveCalendarsEventAction}
 */
export function receiveDocumentTypesActionCreator(documentTypesP: Array<ReceiveDocumentTypePayload>): ReceiveDocumentTypesAction {
    return {
        type: RECEIVE_DOCUMENT_TYPES,
        payload: {
            documentTypes: documentTypesP
        }
    };
}

/**
 * Creates a CREATE_DOCUMENT_TYPES action.
 * 
 * @return {CreateDocumentTypesAction}
 */
export function createDocumentTypesActionCreator(typeP: string): CreateDocumentTypesAction {
    return {
        type: CREATE_DOCUMENT_TYPES,
        payload: {
            type: typeP
        }
    };
}