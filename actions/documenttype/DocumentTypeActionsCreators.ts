import { FailedDocumentTypeAction, FAILED_DOCUMENT_TYPE, ReceiveDocumentTypeAction, RECEIVE_DOCUMENT_TYPE, RequestDocumentTypeAction, REQUEST_DOCUMENT_TYPE } from "./DocumentTypeActions";

/**
 * Creates a REQUEST_DOCUMENT_TYPE action.
 * 
 * @return {RequestDocumentTypeAction}
 */
export function requestDocumentTypeActionCreator(): RequestDocumentTypeAction {
    return {
        type: REQUEST_DOCUMENT_TYPE
    };
}

/**
 * Creates a FAILED_DOCUMENT_TYPE action.
 * 
 * @return {FailedDocumentTypeAction}
 */
export function failedDocumentTypeActionCreator(): FailedDocumentTypeAction {
    return {
        type: FAILED_DOCUMENT_TYPE
    };
}

/**
 * Creates a RECEIVE_DOCUMENT_TYPE action.
 * 
 * @return {ReceiveDocumentTypeAction}
 */
export function receiveDocumentTypeActionCreator(idP: number, typeP: string): ReceiveDocumentTypeAction {
    return {
        type: RECEIVE_DOCUMENT_TYPE,
        payload: {
            id: idP,
            type: typeP
        }
    };
}