import { ReceiveDocumentTypePayload } from "../documenttype/DocumentTypeActions";

/**
 * Identifier for the action of
 * requesting the document types
 * payload.
 */
export const REQUEST_DOCUMENT_TYPES = 'REQUEST_DOCUMENT_TYPES';
/**
 * Identifier for the action of
 * failing the request on
 * document types.
 */
export const FAILED_DOCUMENT_TYPES = 'FAILED_DOCUMENT_TYPES';
/**
 * Identifier for the action of
 * receiving the request on
 * document types
 */
export const RECEIVE_DOCUMENT_TYPES = 'RECEIVE_DOCUMENT_TYPES';
/**
 * Identifier for the action of
 * creating the request on
 * document type
 */
export const CREATE_DOCUMENT_TYPES = 'CREATE_DOCUMENT_TYPES';

/**
 * Identifier for the payload of
 * receiving the document types.
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

/** 
 * CREATE_DOCUMENT_TYPES action interface
 * for type definition. 
 */
export interface CreateDocumentTypesAction {
    type: typeof CREATE_DOCUMENT_TYPES;
    payload: {
        type: string;
    };
}

export type DocumentTypesActions = RequestDocumentTypesAction | FailedDocumentTypesAction | ReceiveDocumentTypesAction | CreateDocumentTypesAction;