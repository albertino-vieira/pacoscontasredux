import { ReceiveRequestPayload } from "../request/RequestActions";
import { FailedRequestAction, FAILED_REQUEST, ReceiveRequestAction, RECEIVE_REQUEST, RequestRequestAction, REQUEST_REQUEST } from "./RequestActions";

/**
 * Creates a REQUEST_REQUEST action.
 * 
 * @return {RequestRequestAction}
 */
export function requestRequestActionCreator(): RequestRequestAction {
    return {
        type: REQUEST_REQUEST
    };
}

/**
 * Creates a FAILED_REQUEST action.
 * 
 * @return {FailedRequestAction}
 */
export function failedRequestActionCreator(): FailedRequestAction {
    return {
        type: FAILED_REQUEST
    };
}

/**
 * Creates a RECEIVE_REQUEST action.
 * 
 * @return {ReceiveRequestAction}
 */
export function receiveRequestActionCreator(idP: number, requestTypeIdP: number, requestDateP: Date, descriptionP: string, statusIdP: number, hasFileP: boolean, fileUrlP: string,): ReceiveRequestAction {
    return {
        type: RECEIVE_REQUEST,
        payload: {
            id: idP,
            requestTypeId: requestTypeIdP,
            requestDate: requestDateP,
            description: descriptionP,
            statusId: statusIdP,
            hasFile: hasFileP,
            fileUrl: fileUrlP
        }
    };
}