/**
 * RequestType state
* for type definition.
*/
export interface RequestTypeState {
    id: number;
    type: string;
}

/**
 * RequestType state
 * initial state.
 */
export const initialState: RequestTypeState = {
    id: 0,
    type: "",
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {RequestTypeState} state1
 * @param {RequestTypeState} state2
 *
 * @return {boolean}
 */
export function equals(state1: RequestTypeState, state2: RequestTypeState = initialState): boolean {
    if (state1.id === state2.id && state1.type === state2.type) {
        return true;
    }
    return false;
}