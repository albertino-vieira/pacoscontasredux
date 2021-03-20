import { ReceiveDocumentPayload } from "../document/DocumentActions";

/**
 * Identifier for the action of
 * requesting the calendar events
 * payload.
 */
export const REQUEST_DOCUMENTS = 'REQUEST_DOCUMENTS';
/**
 * Identifier for the action of
 * failing the request on
 * calendar events.
 */
export const FAILED_DOCUMENTS = 'FAILED_DOCUMENTS';
/**
 * Identifier for the action of
 * receiving the request on
 * calendar events
 */
export const RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS';

/**
 * Identifier for the payload of
 * receiving the calendar events.
 */
export interface ReceiveDocumentsPayload {
    documents: Array<ReceiveDocumentPayload>;
}

/** 
 * REQUEST_DOCUMENTS action interface
 * for type definition. 
 */
export interface RequestDocumentsAction {
    type: typeof REQUEST_DOCUMENTS;
}

/** 
 * FAILED_DOCUMENTS action interface
 * for type definition. 
 */
export interface FailedDocumentsAction {
    type: typeof FAILED_DOCUMENTS;
}

/** 
 * RECEIVE_DOCUMENTS action interface
 * for type definition. 
 */
export interface ReceiveDocumentsAction {
    type: typeof RECEIVE_DOCUMENTS;
    payload: ReceiveDocumentsPayload;
}

export type DocumentsActions = RequestDocumentsAction | FailedDocumentsAction | ReceiveDocumentsAction;