import { RequestStatusState } from "../requeststatus/RequestStatusState";

/**
 * ResquestsStatus state
* for type definition.
*/
export interface ResquestsStatusState {
    byIds: Map<number, RequestStatusState>;
allIds: Array<number>;
isFetching: boolean;
fetchingFailed: boolean;
}

/**
 * ResquestsStatus state
 * initial state.
 */
export const initialState: ResquestsStatusState = {
    byIds: new Map<number, RequestStatusState>(),
    allIds: new Array<number>(),
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {ResquestsStatusState} state1
 * @param {ResquestsStatusState} state2
 *
 * @return {boolean}
 */
export function equals(state1: ResquestsStatusState, state2: ResquestsStatusState = initialState): boolean {
    if (state1 === state2) {
        return true;
    }
    return false;
}