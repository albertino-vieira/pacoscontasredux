/**
 * Document state
* for type definition.
*/
export interface DocumentState {
    id: number;
    name: string;
    documentTypeId: number;
    clientId: number;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * Document state
 * initial state.
 */
export const initialState: DocumentState = {
    id: 0,
    name: "",
    documentTypeId: 0,
    clientId: 0,
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {DocumentState} state1
 * @param {DocumentState} state2
 *
 * @return {boolean}
 */
export function equals(state1: DocumentState, state2: DocumentState = initialState): boolean {
    if (state1.id === state2.id && state1.name === state2.name && state1.documentTypeId === state2.documentTypeId && state1.clientId === state2.clientId) {
        return true;
    }
    return false;
}