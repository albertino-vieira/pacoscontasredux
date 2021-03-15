/**
 * Request state
* for type definition.
*/
export interface RequestState {
    id: number;
    requestTypeId: number,
    requestDate: Date;
    description: string;
    statusId: number;
    hasFile: boolean;
    fileUrl: string;
    isFetching: boolean;
    fetchingFailed: boolean;

}

/**
 * Request state
 * initial state.
 */
export const initialState: RequestState = {
    id: 0,
    requestTypeId: 0,
    requestDate: new Date(),
    description: "",
    statusId: 0,
    hasFile: false,
    fileUrl: "",
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {RequestState} state1
 * @param {RequestState} state2
 *
 * @return {boolean}
 */
export function equals(state1: RequestState, state2: RequestState = initialState): boolean {
    if (state1.id === state2.id && state1.requestTypeId === state2.requestTypeId && state1.requestDate === state2.requestDate && state1.description === state2.description
        && state1.statusId === state2.statusId && state1.hasFile === state2.hasFile && state1.fileUrl === state2.fileUrl) {
        return true;
    }
    return false;
}