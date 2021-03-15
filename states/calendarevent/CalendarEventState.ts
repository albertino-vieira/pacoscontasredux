/**
 * CalendarEvent state
* for type definition.
*/
export interface CalendarEventState {
    id: number;
    date: Date;
    description: string;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * CalendarEvent state
 * initial state.
 */
export const initialState: CalendarEventState = {
    id: 0,
    date: new Date(),
    description: "",
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {CalendarEventState} state1
 * @param {CalendarEventState} state2
 *
 * @return {boolean}
 */
export function equals(state1: CalendarEventState, state2: CalendarEventState = initialState): boolean {
    if (state1.id === state2.id && state1.date === state2.date && state1.description === state2.description) {
        return true;
    }
    return false;
}