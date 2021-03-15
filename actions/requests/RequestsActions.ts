import { ReceiveRequestPayload } from "../request/RequestActions";

/**
 * Identifier for the action of
 * requesting the requests.
 */
export const REQUEST_REQUESTS = 'REQUEST_REQUESTS';

/**
 * Identifier for the action of
 * failing of the request on 
 * requestS.
 */
export const FAILED_REQUESTS = 'FAILED_REQUESTS';

/**
 * Identifier for the action of
 * receiving the requestS.
 */
export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';

/**
 * Identifier for the payload of
 * receiving the requests.
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
 * FAILED_REQUESTS action interface
 * for type definition. 
 */
export interface FailedRequestsAction {
    type: typeof FAILED_REQUESTS;
}


/** 
 * RECEIVE_REQUESTS action interface
 * for type definition. 
 */
export interface ReceiveRequestsAction {
    type: typeof RECEIVE_REQUESTS;
    payload: ReceiveRequestsPayload;
}

export type RequestsActions = RequestRequestsAction | FailedRequestsAction | ReceiveRequestsAction;