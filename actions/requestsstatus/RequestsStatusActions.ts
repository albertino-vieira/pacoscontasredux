import { ReceiveRequestStatusPayload } from "../resqueststatus/RequestStatusActions";

/**
 * Identifier for the action of
 * requesting th resquests status.
 */
export const REQUEST_RESQUESTS_STATUS = 'REQUEST_RESQUESTS_STATUS';
/**
 * Identifier for the action of
 * receiving the request status
 * payload.
 */
export const RECEIVE_REQUESTS_STATUS = 'RECEIVE_REQUESTS_STATUS';
/**
 * Identifier for the action of
 * failing the request on the
 * request status.
 */
export const FAILED_REQUESTS_STATUS = 'FAILED_REQUESTS_STATUS';

/**
 * Identifier for the payload of
 * receiving the request status.
 */
export interface ReceiveRequestsStatusPayload {
    requestsStatus: Array<ReceiveRequestStatusPayload>;
}

/** 
 * REQUEST_RESQUESTS_STATUS action interface
 * for type definition. 
 */
export interface RequestRequestsStatusAction {
    type: typeof REQUEST_RESQUESTS_STATUS;
}
/** 
 * RECEIVE_REQUESTS_STATUS action interface
 * for type definition. 
 */
export interface ReceiveRequestsStatusAction {
    type: typeof RECEIVE_REQUESTS_STATUS;
    payload: ReceiveRequestsStatusPayload;
}
/** 
 * FAILED_REQUESTS_STATUS action interface
 * for type definition. 
 */
export interface FailedRequestsStatusAction {
    type: typeof FAILED_REQUESTS_STATUS;
}


export type RequestsStatusActions = RequestRequestsStatusAction | ReceiveRequestsStatusAction | FailedRequestsStatusAction;