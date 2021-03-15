import { ReceiveDocumentTypePayload } from "../documenttype/DocumentTypeActions";

/**
 * Identifier for the action of
 * requesting the calendar events
 * payload.
 */
export const REQUEST_DOCUMENT_TYPES = 'REQUEST_DOCUMENT_TYPES';
/**
 * Identifier for the action of
 * failing the request on
 * calendar events.
 */
export const FAILED_DOCUMENT_TYPES = 'FAILED_DOCUMENT_TYPES';
/**
 * Identifier for the action of
 * receiving the request on
 * calendar events
 */
export const RECEIVE_DOCUMENT_TYPES = 'RECEIVE_DOCUMENT_TYPES';

/**
 * Identifier for the payload of
 * receiving the calendar events.
 */
export interface ReceiveDocumentTypesPayload {
    documentTypes: Array<ReceiveDocumentTypePayload>;
}

/** 
 * REQUEST_DOCUMENT_TYPES action interface
 * for type definition. 
 */
export interface RequestDocumentTypesAction {
    type: typeof REQUEST_DOCUMENT_TYPES;
}

/** 
 * FAILED_DOCUMENT_TYPES action interface
 * for type definition. 
 */
export interface FailedDocumentTypesAction {
    type: typeof FAILED_DOCUMENT_TYPES;
}

/** 
 * RECEIVE_DOCUMENT_TYPES action interface
 * for type definition. 
 */
export interface ReceiveDocumentTypesAction {
    type: typeof RECEIVE_DOCUMENT_TYPES;
    payload: ReceiveDocumentTypesPayload;
}

export type ReceiveDocumentTypesActions = RequestDocumentTypesAction | FailedDocumentTypesAction | ReceiveDocumentTypesAction;