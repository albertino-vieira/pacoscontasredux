import {
    FailedRequestsStatusAction, FAILED_REQUESTS_STATUS,
    ReceiveRequestsStatusAction, ReceiveRequestsStatusPayload,
    RECEIVE_REQUESTS_STATUS,
    RequestRequestsStatusAction, REQUEST_RESQUESTS_STATUS
} from "./RequestsStatusActions";

/**
 * Creates a REQUEST_REQUESTS_STATUS action.
 * 
 * @return {RequestRequestsStatusAction}
 */
export function requestRequestsSatusActionCreator(): RequestRequestsStatusAction {
    return {
        type: REQUEST_RESQUESTS_STATUS
    };
}

/**
 * Creates a FAILED_REQUESTS_STATUS action.
 * 
 * @return {FailedRequestsStatusAction}
 */
export function failedRequestsStatusActionCreator(): FailedRequestsStatusAction {
    return {
        type: FAILED_REQUESTS_STATUS
    };
}

/**
 * Creates a RECEIVE_REQUESTS_SATATUS action.
 * 
 * @return {ReceiveRequestsStatusAction}
 */
export function receiveRequestsStatusActionCreator(resquestsStatusP: ReceiveRequestsStatusPayload): ReceiveRequestsStatusAction {
    return {
        type: RECEIVE_REQUESTS_STATUS,
        payload: resquestsStatusP
    };
}