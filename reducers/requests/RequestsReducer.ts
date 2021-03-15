import { ReceiveRequestPayload } from "../../actions/request/RequestActions";
import { receiveRequestActionCreator } from "../../actions/request/ResquestActionsCreator";
import { FAILED_REQUESTS, RECEIVE_REQUESTS, RequestsActions, REQUEST_REQUESTS } from "../../actions/requests/RequestsActions";
import { RequestState, initialState as requestInitialState } from "../../states/request/RequestState";
import { initialState, RequestsState } from "../../states/requests/RequestsState";
import requestReducer from "../request/RequestReducer";

/**
 * Calculates the RequestsState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {RequestsState} state
 * @param {RequestsActions} action
 *
 * @return {RequestsState}
 */
export default function requestsReducer(state: RequestsState = initialState, action: RequestsActions): RequestsState {
    switch (action.type) {
        case REQUEST_REQUESTS:
            return {
                ...state,
                isFetching: true

            }
        case FAILED_REQUESTS:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true

            }
        case RECEIVE_REQUESTS:
            return {
                ...state,
                isFetching: false,
                byId: byId(state.byId, action.payload.requests),
                allIds: allIds(state.allIds, action.payload.requests)
            }
        default:
            return state;
    }
}

function byId(byIdP: Map<number, RequestState>, requestsP: Array<ReceiveRequestPayload>): Map<number, RequestState> {
    let updatedById = byIdP;

    requestsP.forEach((requestP) => {
        let request: RequestState;
        if (updatedById.get(requestP.id)) {
            request = requestReducer(updatedById.get(requestP.id), receiveRequestActionCreator(requestP.id, requestP.requestTypeId, requestP.requestDate,
                requestP.description, requestP.statusId, requestP.hasFile, requestP.fileUrl))
        } else {
            request = {
                ...requestInitialState,
                id: requestP.id,
                requestTypeId: requestP.requestTypeId,
                requestDate: requestP.requestDate,
                description: requestP.description,
                statusId: requestP.statusId,
                hasFile: requestP.hasFile,
                fileUrl: requestP.fileUrl
            }

        }
        updatedById.set(request.id, request);
    })
    return updatedById;
}

function allIds(allIdsP: Array<number>, requestsP: Array<ReceiveRequestPayload>): Array<number> {
    let updatedAllIds: Array<number> = [...allIdsP];

    requestsP.forEach((requestP) => {
        updatedAllIds.push(requestP.id);
    })
    return updatedAllIds;
}