/**
 * RequestStatus state
* for type definition.
*/
export interface RequestStatusState {
    id: number;
    status: string;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * RequestStatus state
 * initial state.
 */
export const initialState: RequestStatusState = {
    id: 0,
    status: "",
    isFetching: false,
    fetchingFailed: false,
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {RequestStatusState} state1
 * @param {RequestStatusState} state2
 *
 * @return {boolean}
 */
export function equals(state1: RequestStatusState, state2: RequestStatusState = initialState): boolean {
    if (state1.id === state2.id && state1.status === state2.status) {
        return true;
    }
    return false;
}