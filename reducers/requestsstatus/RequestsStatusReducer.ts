import { FAILED_REQUESTS_STATUS, ReceiveRequestsStatusPayload, RECEIVE_REQUESTS_STATUS, RequestsStatusActions, REQUEST_RESQUESTS_STATUS } from "../../actions/requestsstatus/RequestsStatusActions";
import { ReceiveRequestStatusPayload } from "../../actions/resqueststatus/RequestStatusActions";
import { receiveRequestStatusActionCreator } from "../../actions/resqueststatus/RequestStatusActionsCreator";
import { RequestsStatusState, initialState } from "../../states/requestsstatus/RequestsStatusState";
import { RequestStatusState, initialState as requestStatusInitialState } from "../../states/requeststatus/RequestStatusState";
import requestStatusReducer from "../requeststatus/RequestStatusReducer";

/**
 * Calculates the RequestsStatusState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {RequestsStatusState} state
 * @param {RequestsStatusActions} action
 *
 * @return {RequestsStatusState}
 */
export default function Reducer(state: RequestsStatusState = initialState, action: RequestsStatusActions): RequestsStatusState {
  switch (action.type) {
    case REQUEST_RESQUESTS_STATUS:
      return {
        ...state,
        isFetching: true

      }
    case FAILED_REQUESTS_STATUS:
      return {
        ...state,
        isFetching: false,
        fetchingFailed: true

      }
    case RECEIVE_REQUESTS_STATUS:
      return {
        ...state,
        isFetching: false,
        byId: byId(state.byId, action.payload.requestsStatus),
        allIds: allIds(state.allIds, action.payload.requestsStatus)
      }
    default:
      return state;
  }
}

function byId(byIdP: Map<number, RequestStatusState>, requestsStatusP: Array<ReceiveRequestStatusPayload>): Map<number, RequestStatusState> {
  let updatedById = byIdP;

  requestsStatusP.forEach((requestStatusP) => {
    let requestStatus: RequestStatusState;
    if (updatedById.get(requestStatusP.id)) {
      requestStatus = requestStatusReducer(updatedById.get(requestStatusP.id), receiveRequestStatusActionCreator(requestStatusP.id, requestStatusP.status))
    } else {
      requestStatus = {
        ...requestStatusInitialState,
        id: requestStatusP.id,
        status: requestStatusP.status
      }

    }
    updatedById.set(requestStatus.id, requestStatus);
  })
  return updatedById;
}

function allIds(allIdsP: Array<number>, requestsStatusP: Array<ReceiveRequestStatusPayload>): Array<number> {
  let updatedAllIds: Array<number> = [...allIdsP];

  requestsStatusP.forEach((requestStatusP) => {
    updatedAllIds.push(requestStatusP.id);
  })
  return updatedAllIds;
}