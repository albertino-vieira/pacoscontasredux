import { UserState, equals as userEquals } from "../user/UserState";

/**
 * Users state
* for type definition.
*/
export interface UsersState {
    byId: Map<number, UserState>;
    allIds: Array<number>;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * Users state
 * initial state.
 */
export const initialState: UsersState = {
    byId: new Map<number, UserState>(),
    allIds: new Array<number>(),
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two user states and
 * checks if they are equal.
 *
 * @param {UsersState} state1
 * @param {UsersState} state2
 *
 * @return {boolean}
 */
export function equals(state1: UsersState, state2: UsersState = initialState): boolean {
    let processed: Array<number> = new Array<number>();
    for (let requestTypeId of state1.allIds) {
        processed.push(requestTypeId);
        if (!state2.allIds.includes(requestTypeId)) {
            return false;
        } else {
            let userFrom1: UserState | undefined = state1.byId.get(requestTypeId);
            let userFrom2: UserState | undefined = state2.byId.get(requestTypeId);
            if (userFrom1 === undefined || userFrom2 === undefined) {
                return false;
            } else {
                if (!userEquals(userFrom1, userFrom2)) {
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