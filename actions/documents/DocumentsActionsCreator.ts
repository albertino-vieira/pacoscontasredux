import { ReceiveDocumentPayload } from "../document/DocumentActions";
import { FailedDocumentsAction, FAILED_DOCUMENTS, ReceiveDocumentsAction, RECEIVE_DOCUMENTS, RequestDocumentsAction, REQUEST_DOCUMENTS } from "./DocumentsActions";

/**
 * Creates a REQUEST_DOCUMENTS action.
 * 
 * @return {RequestDocumentsAction}
 */
export function requestDocumentsActionCreator(): RequestDocumentsAction {
    return {
        type: REQUEST_DOCUMENTS
    };
}

/**
 * Creates a FAILED_DOCUMENTS action.
 * 
 * @return {FailedDocumentsAction}
 */
export function failedDocumentsActionCreator(): FailedDocumentsAction {
    return {
        type: FAILED_DOCUMENTS
    };
}

/**
 * Creates a RECEIVE_DOCUMENTS action.
 * 
 * @return {ReceiveCalendarsEventAction}
 */
export function receiveDocumentActionCreator(documentsP: Array<ReceiveDocumentPayload>): ReceiveDocumentsAction {
    return {
        type: RECEIVE_DOCUMENTS,
        payload: {
            documents: documentsP
        }
    };
}