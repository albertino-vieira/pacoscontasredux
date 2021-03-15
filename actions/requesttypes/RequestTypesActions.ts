import { ReceiveRequestTypePayload } from "../requesttype/RequestTypeActions";

/**
 * Identifier for the action of
 * requesting the request types
 * payload.
 */
export const REQUEST_REQUEST_TYPES = 'REQUEST_REQUEST_TYPES';
/**
 * Identifier for the action of
 * failing the request on
 * request types.
 */
export const FAILED_REQUEST_TYPES = 'FAILED_REQUEST_TYPES';
/**
 * Identifier for the action of
 * receiving the request on
 * request types
 */
export const RECEIVE_REQUEST_TYPES = 'RECEIVE_REQUEST_TYPES';

/**
 * Identifier for the payload of
 * receiving the request types.
 */
export interface ReceiveRequestTypesPayload {
    requestTypes: Array<ReceiveRequestTypePayload>;
}

/** 
 * REQUEST_REQUEST_TYPES action interface
 * for type definition. 
 */
export interface RequestRequestTypesAction {
    type: typeof REQUEST_REQUEST_TYPES;
}

/** 
 * FAILED_REQUEST_TYPES action interface
 * for type definition. 
 */
export interface FailedRequestTypesAction {
    type: typeof FAILED_REQUEST_TYPES;
}

/** 
 * RECEIVE_REQUEST_TYPES action interface
 * for type definition. 
 */
export interface ReceiveRequestTypesAction {
    type: typeof RECEIVE_REQUEST_TYPES;
    payload: ReceiveRequestTypesPayload;
}

export type RequestTypesActions = RequestRequestTypesAction | FailedRequestTypesAction | ReceiveRequestTypesAction;