/**
 * Identifier for the action of
 * requesting the user
 * payload.
 */
export const REQUEST_USER = 'REQUEST_USER';
/**
 * Identifier for the action of
 * failing the request on
 * user.
 */
export const FAILED_USER = 'FAILED_USER';
/**
 * Identifier for the action of
 * receiving the request on
 * user
 */
export const RECEIVE_USER = 'RECEIVE_USER';

/**
 * Identifier for the payload of
 * receiving the user.
 */
export interface ReceiveUserPayload {
    id: number;
    name: string;
    email: string;
    token: string;
    nif: string;
    role: string;
}

/** 
 * REQUEST_USER action interface
 * for type definition. 
 */
export interface RequestUserAction {
    type: typeof REQUEST_USER;
}

/** 
 * FAILED_USER action interface
 * for type definition. 
 */
export interface FailedUserAction {
    type: typeof FAILED_USER;
}

/** 
 * RECEIVE_USER action interface
 * for type definition. 
 */
export interface ReceiveUserAction {
    type: typeof RECEIVE_USER;
    payload: ReceiveUserPayload;
}

export type UserActions = RequestUserAction | FailedUserAction | ReceiveUserAction;