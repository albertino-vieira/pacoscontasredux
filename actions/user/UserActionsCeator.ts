import { FailedUserAction, FAILED_USER, ReceiveUserAction, RECEIVE_USER, RequestUserAction, REQUEST_USER } from "./UserActions";

/**
 * Creates a REQUEST_REQUEST_TYPE action.
 * 
 * @return {RequestUserAction}
 */
export function requestUserActionCreator(): RequestUserAction {
    return {
        type: REQUEST_USER
    };
}

/**
 * Creates a FAILED_USER action.
 * 
 * @return {FailedUserAction}
 */
export function failedUserActionCreator(): FailedUserAction {
    return {
        type: FAILED_USER
    };
}

/**
 * Creates a RECEIVE_USER action.
 * 
 * @return {ReceiveCalendarsEventAction}
 */
export function receiveUserActionCreator(idP: number, nameP: string, emailP: string, tokenP: string, nifP: string, roleP: string): ReceiveUserAction {
    return {
        type: RECEIVE_USER,
        payload: {
            id: idP,
            name: nameP,
            email: emailP,
            token: tokenP,
            nif: nifP,
            role: roleP
        }
    };
}