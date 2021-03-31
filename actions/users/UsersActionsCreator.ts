import { ReceiveUserPayload } from "../user/UserActions";
import { CreateUsersAction, CREATE_USERS, FailedUsersAction, FAILED_USERS, ReceiveUsersAction, RECEIVE_USERS, RequestUsersAction, REQUEST_USERS } from "./UsersActions";

/**
 * Creates a REQUEST_USERS action.
 * 
 * @return {RequestUsersAction}
 */
export function requestUsersActionCreator(): RequestUsersAction {
    return {
        type: REQUEST_USERS
    };
}

/**
 * Creates a FAILED_USERS action.
 * 
 * @return {FailedUsersAction}
 */
export function failedUsersActionCreator(): FailedUsersAction {
    return {
        type: FAILED_USERS
    };
}

/**
 * Creates a RECEIVE_USERS action.
 * 
 * @return {ReceiveCalendarsEventAction}
 */
export function receiveUsersActionCreator(usersP: Array<ReceiveUserPayload>): ReceiveUsersAction {
    return {
        type: RECEIVE_USERS,
        payload: {
            users: usersP
        }
    };
}

/**
 * Creates a CREATE_USERS action.
 * 
 * @return {ReceiveCalendarsEventAction}
 */
export function createUsersActionCreator(userP: ReceiveUserPayload): CreateUsersAction {
    return {
        type: CREATE_USERS,
        payload: {
            user: userP
        }
    };
}