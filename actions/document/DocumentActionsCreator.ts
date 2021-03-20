import { FailedDocumentAction, FAILED_DOCUMENT, ReceiveDocumentAction, RECEIVE_DOCUMENT, RequestDocumentAction, REQUEST_DOCUMENT } from "./DocumentActions";

/**
 * Creates a REQUEST_DOCUMENT action.
 * 
 * @return {RequestDocumentAction}
 */
export function requestDocumentActionCreator(): RequestDocumentAction {
    return {
        type: REQUEST_DOCUMENT
    };
}

/**
 * Creates a FAILED_DOCUMENT action.
 * 
 * @return {FailedDocumentAction}
 */
export function failedDocumentActionCreator(): FailedDocumentAction {
    return {
        type: FAILED_DOCUMENT
    };
}

/**
 * Creates a RECEIVE_DOCUMENT action.
 * 
 * @return {ReceiveDocumentAction}
 */
export function receiveDocumentActionCreator(idP: number, nameP: string, documentTypeIdP: number, clientIdP: number): ReceiveDocumentAction {
    return {
        type: RECEIVE_DOCUMENT,
        payload: {
            id: idP,
            name: nameP,
            documentTypeId: documentTypeIdP,
            clientId: clientIdP
        }
    };
}