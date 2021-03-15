/**
 * Identifier for the action of
 * requesting the request status.
 */
export const REQUEST_REQUEST_STATUS = 'REQUEST_REQUEST_STATUS';

/**
 * Identifier for the action of
 * failing of the request on 
 * request status.
 */
export const FAILED_REQUEST_STATUS = 'FAILED_REQUEST_STATUS';

/**
 * Identifier for the action of
 * receiving the request status.
 */
export const RECEIVE_REQUEST_STATUS = 'RECEIVE_REQUEST_STATUS';

/**
 * Identifier for the payload of
 * receiving the request status.
 */
export interface ReceiveRequestStatusPayload {
    id: number;
    status: string;
}

/** 
 * REQUEST_REQUEST_STATUS action interface
 * for type definition. 
 */
export interface RequestRequestStatusAction {
    type: typeof REQUEST_REQUEST_STATUS;
}


/** 
 * FAILED_REQUEST_STATUS action interface
 * for type definition. 
 */
export interface FailedRequestStatus {
    type: typeof FAILED_REQUEST_STATUS;
}


/** 
 * RECEIVE_REQUEST_STATUS action interface
 * for type definition. 
 */
export interface ReceiveRequestStatus {
    type: typeof RECEIVE_REQUEST_STATUS;
    payload: ReceiveRequestStatusPayload;
}

export type RequestStatusActions = RequestRequestStatusAction | FailedRequestStatus | ReceiveRequestStatus;