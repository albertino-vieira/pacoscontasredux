/**
 * DocumentType state
* for type definition.
*/
export interface DocumentTypeState {
    id: number;
    type: string;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * DocumentType state
 * initial state.
 */
export const initialState: DocumentTypeState = {
    id: 0,
    type: "",
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {DocumentTypeState} state1
 * @param {DocumentTypeState} state2
 *
 * @return {boolean}
 */
export function equals(state1: DocumentTypeState, state2: DocumentTypeState = initialState): boolean {
    if (state1.id === state2.id && state1.type === state2.type) {
        return true;
    }
    return false;
}