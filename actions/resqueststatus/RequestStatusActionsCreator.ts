import { FailedRequestStatus, FAILED_REQUEST_STATUS, ReceiveRequestStatus, RECEIVE_REQUEST_STATUS, RequestRequestStatusAction, REQUEST_REQUEST_STATUS } from "./RequestStatusActions";

/**
 * Creates a REQUEST_REQUEST_STATUS action.
 * 
 * @return {RequestRequestStatusAction}
 */
export function requestRequestStatusActionCreator(): RequestRequestStatusAction {
    return {
        type: REQUEST_REQUEST_STATUS
    };
}


/**
 * Creates a FAILED_REQUEST_STATUS action.
 * 
 * @return {FailedRequestStatus}
 */
export function failedRequestStatusActionCreator(): FailedRequestStatus {
    return {
        type: FAILED_REQUEST_STATUS
    };
}

/**
 * Creates a RECEIVE_REQUEST_STATUS action.
 * 
 * @return {ReceiveRequestStatus}
 */
export function receiveRequestStatusActionCreator(idP: number, statusP: string): ReceiveRequestStatus {
    return {
        type: RECEIVE_REQUEST_STATUS,
        payload: {
            id: idP,
            status: statusP
        }
    };
}
