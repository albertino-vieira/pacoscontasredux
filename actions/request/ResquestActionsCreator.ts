import { ReceiveRequestPayload } from "./RequestActions";

/**
 * Identifier for the action of
 * requesting the Requests.
 */
export const REQUEST_REQUESTS = 'REQUEST_REQUESTS';

/**
 * Identifier for the action of
 * failing of the request on 
 * request.
 */
export const FAILED_REQUESTS = 'FAILED_REQUESTS';

/**
 * Identifier for the action of
 * receiving the request.
 */
export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';

/**
 * Identifier for the payload of
 * receiving the request.
 */
export interface ReceiveRequestsPayload {
    requests: Array<ReceiveRequestPayload>;
}

/** 
 * REQUEST_REQUESTS action interface
 * for type definition. 
 */
export interface RequestRequestsAction {
    type: typeof REQUEST_REQUESTS;
}


/** 
 * FAILED_REQUEST action interface
 * for type definition. 
 */
export interface FailedRequestsAction {
    type: typeof FAILED_REQUESTS;
}


/** 
 * RECEIVE_REQUEST action interface
 * for type definition. 
 */
export interface ReceiveRequestsAction {
    type: typeof RECEIVE_REQUESTS;
    payload: ReceiveRequestsPayload;
}

export type RequestsActions = RequestRequestsAction | FailedRequestsAction | ReceiveRequestsAction;