import { ReceiveUserPayload } from "../user/UserActions";

/**
 * Identifier for the action of
 * requesting the request status.
 */
export const REQUEST_USERS = 'REQUEST_USERS';

/**
 * Identifier for the action of
 * failing of the request on 
 * request status.
 */
export const FAILED_USERS = 'FAILED_USERS';

/**
 * Identifier for the action of
 * receiving the request status.
 */
export const RECEIVE_USERS = 'RECEIVE_USERS';

/**
 * Identifier for the action of
 * creating the user.
 */
export const CREATE_USERS = 'CREATE_USERS';

/**
 * Identifier for the payload of
 * receiving the request status.
 */
export interface ReceiveUsersPayload {
    users: Array<ReceiveUserPayload>;
}

/** 
 * REQUEST_USERS action interface
 * for type definition. 
 */
export interface RequestUsersAction {
    type: typeof REQUEST_USERS;
}


/** 
 * FAILED_USERS action interface
 * for type definition. 
 */
export interface FailedUsersAction {
    type: typeof FAILED_USERS;
}


/** 
 * RECEIVE_USERS action interface
 * for type definition. 
 */
export interface ReceiveUsersAction {
    type: typeof RECEIVE_USERS;
    payload: ReceiveUsersPayload;
}

/** 
 * CREATE_USERS action interface
 * for type definition. 
 */
export interface CreateUsersAction {
    type: typeof CREATE_USERS;
    payload: {
        user: ReceiveUserPayload
    };
}

export type UsersActions = RequestUsersAction | FailedUsersAction | ReceiveUsersAction;