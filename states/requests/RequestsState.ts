import { RequestState, equals as requestEquals } from "../request/RequestState";

/**
 * Requests state
* for type definition.
*/
export interface RequestsState {
    byId: Map<number, RequestState>;
    allIds: Array<number>;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * Requests state
 * initial state.
 */
export const initialState: RequestsState = {
    byId: new Map<number, RequestState>(),
    allIds: new Array<number>(),
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {RequestsState} state1
 * @param {RequestsState} state2
 *
 * @return {boolean}
 */
export function equals(state1: RequestsState, state2: RequestsState = initialState): boolean {
    let processed: Array<number> = new Array<number>();
    for (let requestId of state1.allIds) {
        processed.push(requestId);
        if (!state2.allIds.includes(requestId)) {
            return false;
        } else {
            let requestFrom1: RequestState | undefined = state1.byId.get(requestId);
            let requestFrom2: RequestState | undefined = state2.byId.get(requestId);
            if (requestFrom1 === undefined || requestFrom2 === undefined) {
                return false;
            } else {
                if (!requestEquals(requestFrom1, requestFrom2)) {
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