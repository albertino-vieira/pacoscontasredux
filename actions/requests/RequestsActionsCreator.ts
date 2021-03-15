import { ReceiveRequestPayload } from "../request/RequestActions";
import { FailedRequestsAction, FAILED_REQUESTS, ReceiveRequestsAction, RECEIVE_REQUESTS, RequestRequestsAction, REQUEST_REQUESTS } from "./RequestsActions";

/**
 * Creates a REQUEST_REQUESTS action.
 * 
 * @return {RequestRequestsAction}
 */
export function requestRequestsActionCreator(): RequestRequestsAction {
    return {
        type: REQUEST_REQUESTS
    };
}

/**
 * Creates a FAILED_REQUESTS action.
 * 
 * @return {FailedRequestsAction}
 */
export function failedRequestsActionCreator(): FailedRequestsAction {
    return {
        type: FAILED_REQUESTS
    };
}

/**
 * Creates a RECEIVE_REQUESTS action.
 * 
 * @return {ReceiveCalendarsEventAction}
 */
export function receiveRequestsActionCreator(requestsP: Array<ReceiveRequestPayload>): ReceiveRequestsAction {
    return {
        type: RECEIVE_REQUESTS,
        payload: {
            requests: requestsP
        }
    };
}