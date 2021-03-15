/**
 * Identifier for the action of
 * requesting the document type
 * payload.
 */
export const REQUEST_DOCUMENT_TYPE = 'REQUEST_DOCUMENT_TYPE';
/**
 * Identifier for the action of
 * failing the request on
 * document type.
 */
export const FAILED_DOCUMENT_TYPE = 'FAILED_DOCUMENT_TYPE';
/**
 * Identifier for the action of
 * receiving the request on
 * document type.
 */
export const RECEIVE_DOCUMENT_TYPE = 'RECEIVE_DOCUMENT_TYPE';

/**
 * Identifier for the payload of
 * receiving the document type.
 */
export interface ReceiveDocumentTypePayload {
    id: number;
    type: string;
}

/** 
 * REQUEST_DOCUMENT_TYPE action interface
 * for type definition. 
 */
export interface RequestDocumentTypeAction {
    type: typeof REQUEST_DOCUMENT_TYPE;
}

/** 
 * FAILED_DOCUMENT_TYPE action interface
 * for type definition. 
 */
export interface FailedDocumentTypeAction {
    type: typeof FAILED_DOCUMENT_TYPE;
}

/** 
 * RECEIVE_DOCUMENT_TYPE action interface
 * for type definition. 
 */
export interface ReceiveDocumentTypeAction {
    type: typeof RECEIVE_DOCUMENT_TYPE;
    payload: ReceiveDocumentTypePayload;
}

export type DocumentTypeActions = RequestDocumentTypeAction | FailedDocumentTypeAction | ReceiveDocumentTypeAction;