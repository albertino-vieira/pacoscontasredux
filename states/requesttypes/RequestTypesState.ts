import { RequestTypeState, equals as requestTypeEquals } from "../requesttype/RequestTypeState";

/**
 * RequestTypes state
* for type definition.
*/
export interface RequestTypesState {
    byId: Map<number, RequestTypeState>;
    allIds: Array<number>;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * RequestTypes state
 * initial state.
 */
export const initialState: RequestTypesState = {
    byId: new Map<number, RequestTypeState>(),
    allIds: new Array<number>(),
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two request types states and
 * checks if they are equal.
 *
 * @param {RequestTypesState} state1
 * @param {RequestTypesState} state2
 *
 * @return {boolean}
 */
export function equals(state1: RequestTypesState, state2: RequestTypesState = initialState): boolean {
    let processed: Array<number> = new Array<number>();
    for (let requestTypeId of state1.allIds) {
        processed.push(requestTypeId);
        if (!state2.allIds.includes(requestTypeId)) {
            return false;
        } else {
            let requestTypeFrom1: RequestTypeState | undefined = state1.byId.get(requestTypeId);
            let requestTypeFrom2: RequestTypeState | undefined = state2.byId.get(requestTypeId);
            if (requestTypeFrom1 === undefined || requestTypeFrom2 === undefined) {
                return false;
            } else {
                if (!requestTypeEquals(requestTypeFrom1, requestTypeFrom2)) {
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