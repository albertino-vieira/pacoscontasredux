/**
 * Identifier for the action of
 * requesting the document
 * payload.
 */
export const REQUEST_DOCUMENT = 'REQUEST_DOCUMENT';
/**
 * Identifier for the action of
 * failing the request on
 * document.
 */
export const FAILED_DOCUMENT = 'FAILED_DOCUMENT';
/**
 * Identifier for the action of
 * receiving the request on
 * document.
 */
export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT';

/**
 * Identifier for the payload of
 * receiving the document.
 */
export interface ReceiveDocumentPayload {
    id: number;
    name: string;
    documentTypeId: number;
    clientId: number;
}

/** 
 * REQUEST_DOCUMENT action interface
 * for type definition. 
 */
export interface RequestDocumentAction {
    type: typeof REQUEST_DOCUMENT;
}

/** 
 * FAILED_DOCUMENT action interface
 * for type definition. 
 */
export interface FailedDocumentAction {
    type: typeof FAILED_DOCUMENT;
}

/** 
 * RECEIVE_DOCUMENT action interface
 * for type definition. 
 */
export interface ReceiveDocumentAction {
    type: typeof RECEIVE_DOCUMENT;
    payload: ReceiveDocumentPayload;
}

export type DocumentActions = RequestDocumentAction | FailedDocumentAction | ReceiveDocumentAction;