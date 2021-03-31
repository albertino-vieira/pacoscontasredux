/**
 * User state
* for type definition.
*/
export interface UserState {
    id: number;
    name: string;
    email: string;
    token: string;
    nif: number;
    role: string;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * User state
 * initial state.
 */
export const initialState: UserState = {
    id: 0,
    name: "",
    email: "",
    token: "",
    nif: 0,
    role: "",
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {UserState} state1
 * @param {UserState} state2
 *
 * @return {boolean}
 */
export function equals(state1: UserState, state2: UserState = initialState): boolean {
    if (state1.id === state2.id && state1.name === state2.name && state1.email === state2.email && state1.token === state2.token &&
        state1.nif === state2.nif && state1.role === state2.role) {
        return true;
    }
    return false;
}