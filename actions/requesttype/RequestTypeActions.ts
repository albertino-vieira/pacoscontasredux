/**
 * Identifier for the action of
 * requesting the request type
 * payload.
 */
export const REQUEST_REQUEST_TYPE = 'REQUEST_REQUEST_TYPE';
/**
 * Identifier for the action of
 * failing the request on
 * request type.
 */
export const FAILED_REQUEST_TYPE = 'FAILED_REQUEST_TYPE';
/**
 * Identifier for the action of
 * receiving the request on
 * request type
 */
export const RECEIVE_REQUEST_TYPE = 'RECEIVE_REQUEST_TYPE';

/**
 * Identifier for the payload of
 * receiving the request type.
 */
export interface ReceiveRequestTypePayload {
    id: number;
    type: string;
}

/** 
 * REQUEST_REQUEST_TYPE action interface
 * for type definition. 
 */
export interface RequestRequestTypeAction {
    type: typeof REQUEST_REQUEST_TYPE;
}

/** 
 * FAILED_REQUEST_TYPE action interface
 * for type definition. 
 */
export interface FailedRequestTypeAction {
    type: typeof FAILED_REQUEST_TYPE;
}

/** 
 * RECEIVE_REQUEST_TYPE action interface
 * for type definition. 
 */
export interface ReceiveRequestTypeAction {
    type: typeof RECEIVE_REQUEST_TYPE;
    payload: ReceiveRequestTypePayload;
}

export type ReceiveRequestTypeActions = RequestRequestTypeAction | FailedRequestTypeAction | ReceiveRequestTypeAction;