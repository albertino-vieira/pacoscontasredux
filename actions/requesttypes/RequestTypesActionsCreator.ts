import { ReceiveRequestTypePayload } from "../requesttype/RequestTypeActions";
import { FailedRequestTypesAction, FAILED_REQUEST_TYPES, ReceiveRequestTypesAction, RECEIVE_REQUEST_TYPES, RequestRequestTypesAction, REQUEST_REQUEST_TYPES } from "./RequestTypesActions";

/**
 * Creates a REQUEST_REQUEST_TYPES action.
 * 
 * @return {RequestRequestTypesAction}
 */
export function requestRequestTypesActionCreator(): RequestRequestTypesAction {
    return {
        type: REQUEST_REQUEST_TYPES
    };
}

/**
 * Creates a FAILED_REQUEST_TYPES action.
 * 
 * @return {FailedRequestTypesAction}
 */
export function failedRequestTypesActionCreator(): FailedRequestTypesAction {
    return {
        type: FAILED_REQUEST_TYPES
    };
}

/**
 * Creates a RECEIVE_REQUEST_TYPES action.
 * 
 * @return {ReceiveCalendarsEventAction}
 */
export function receiveRequestTypesActionCreator(requestTypesP: Array<ReceiveRequestTypePayload>): ReceiveRequestTypesAction {
    return {
        type: RECEIVE_REQUEST_TYPES,
        payload: {
            requestTypes: requestTypesP
        }
    };
}