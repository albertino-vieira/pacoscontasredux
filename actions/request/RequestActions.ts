/**
 * Identifier for the action of
 * requesting the request.
 */
export const REQUEST_REQUEST = 'REQUEST_REQUEST';

/**
 * Identifier for the action of
 * failing of the request on 
 * request.
 */
export const FAILED_REQUEST = 'FAILED_REQUEST';

/**
 * Identifier for the action of
 * receiving the request.
 */
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';

/**
 * Identifier for the payload of
 * receiving the request.
 */
export interface ReceiveRequestPayload {
    id: number;
    requestTypeId: number,
    requestDate: Date;
    description: string;
    statusId: number;
    hasFile: boolean;
    fileUrl: string;
}

/** 
 * REQUEST_REQUEST action interface
 * for type definition. 
 */
export interface RequestRequestAction {
    type: typeof REQUEST_REQUEST;
}


/** 
 * FAILED_REQUEST action interface
 * for type definition. 
 */
export interface FailedRequestAction {
    type: typeof FAILED_REQUEST;
}


/** 
 * RECEIVE_REQUEST action interface
 * for type definition. 
 */
export interface ReceiveRequestAction {
    type: typeof RECEIVE_REQUEST;
    payload: ReceiveRequestPayload;
}

export type RequestActions = RequestRequestAction | FailedRequestAction | ReceiveRequestAction;