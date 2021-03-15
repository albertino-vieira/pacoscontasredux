import { ReceiveRequestTypePayload } from "../../actions/requesttype/RequestTypeActions";
import { receiveRequestTypeActionCreator } from "../../actions/requesttype/RequestTypeActionsCreator";
import { RequestTypesActions, REQUEST_REQUEST_TYPES, FAILED_REQUEST_TYPES, RECEIVE_REQUEST_TYPES } from "../../actions/requesttypes/RequestTypesActions";
import { RequestTypeState, initialState as requestTypeInitialState } from "../../states/requesttype/RequestTypeState";
import { initialState, RequestTypesState } from "../../states/requesttypes/RequestTypesState";
import requestTypeReducer from "../requesttype/RequestTypeReducer";


/**
 * Calculates the RequestTypesState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {RequestTypesState} state
 * @param {RequestTypesActions} action
 *
 * @return {RequestTypesState}
 */
export default function requestTypesReducer(state: RequestTypesState = initialState, action: RequestTypesActions): RequestTypesState {
    switch (action.type) {
        case REQUEST_REQUEST_TYPES:
            return {
                ...state,
                isFetching: true

            }
        case FAILED_REQUEST_TYPES:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true

            }
        case RECEIVE_REQUEST_TYPES:
            return {
                ...state,
                isFetching: false,
                byId: byId(state.byId, action.payload.requestTypes),
                allIds: allIds(state.allIds, action.payload.requestTypes)
            }
        default:
            return state;
    }
}

function byId(byIdP: Map<number, RequestTypeState>, requestTypesP: Array<ReceiveRequestTypePayload>): Map<number, RequestTypeState> {
    let updatedById = byIdP;

    requestTypesP.forEach((requestTypeP) => {
        let requestStatus: RequestTypeState;
        if (updatedById.get(requestTypeP.id)) {
            requestStatus = requestTypeReducer(updatedById.get(requestTypeP.id), receiveRequestTypeActionCreator(requestTypeP.id, requestTypeP.type))
        } else {
            requestStatus = {
                ...requestTypeInitialState,
                id: requestTypeP.id,
                type: requestTypeP.type
            }

        }
        updatedById.set(requestStatus.id, requestStatus);
    })
    return updatedById;
}

function allIds(allIdsP: Array<number>, requestTypesP: Array<ReceiveRequestTypePayload>): Array<number> {
    let updatedAllIds: Array<number> = [...allIdsP];

    requestTypesP.forEach((requestTypeP) => {
        updatedAllIds.push(requestTypeP.id);
    })
    return updatedAllIds;
}