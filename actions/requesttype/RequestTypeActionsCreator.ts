import { FailedRequestTypeAction, FAILED_REQUEST_TYPE, ReceiveRequestTypeAction, RECEIVE_REQUEST_TYPE, RequestRequestTypeAction, REQUEST_REQUEST_TYPE } from "./RequestTypeActions";

/**
 * Creates a REQUEST_REQUEST_TYPE action.
 * 
 * @return {RequestRequestTypeAction}
 */
export function requestRequestTypeActionCreator(): RequestRequestTypeAction {
    return {
        type: REQUEST_REQUEST_TYPE
    };
}

/**
 * Creates a FAILED_REQUEST_TYPE action.
 * 
 * @return {FailedRequestTypeAction}
 */
export function failedRequestTypeActionCreator(): FailedRequestTypeAction {
    return {
        type: FAILED_REQUEST_TYPE
    };
}

/**
 * Creates a RECEIVE_REQUEST_TYPE action.
 * 
 * @return {ReceiveCalendarsEventAction}
 */
export function receiveRequestTypeActionCreator(idP: number, typeP: string): ReceiveRequestTypeAction {
    return {
        type: RECEIVE_REQUEST_TYPE,
        payload: {
            id: idP,
            type: typeP
        }
    };
}