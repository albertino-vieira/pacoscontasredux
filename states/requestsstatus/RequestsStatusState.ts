import { RequestStatusState, equals as requestStatusEquals } from "../requeststatus/RequestStatusState";

/**
 * ResquestsStatus state
* for type definition.
*/
export interface RequestsStatusState {
    byId: Map<number, RequestStatusState>;
    allIds: Array<number>;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * ResquestsStatus state
 * initial state.
 */
export const initialState: RequestsStatusState = {
    byId: new Map<number, RequestStatusState>(),
    allIds: new Array<number>(),
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {RequestsStatusState} state1
 * @param {RequestsStatusState} state2
 *
 * @return {boolean}
 */
export function equals(state1: RequestsStatusState, state2: RequestsStatusState = initialState): boolean {
    let processed: Array<number> = new Array<number>();
    for (let requestStatusId of state1.allIds) {
        processed.push(requestStatusId);
        if (!state2.allIds.includes(requestStatusId)) {
            return false;
        } else {
            let requestStatusFrom1: RequestStatusState | undefined = state1.byId.get(requestStatusId);
            let requestStatusFrom2: RequestStatusState | undefined = state2.byId.get(requestStatusId);
            if (requestStatusFrom1 === undefined || requestStatusFrom2 === undefined) {
                return false;
            } else {
                if (!requestStatusEquals(requestStatusFrom1, requestStatusFrom2)) {
                    return false;
                }
            }
        }
    }
    if (processed.length !== state2.allIds.length) {
        return false;
    }
    return true;
}