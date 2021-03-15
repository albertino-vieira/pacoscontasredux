import { CalendarEventState } from "../calendarevent/CalendarEventState";

/**
 * CalendarEvents state
* for type definition.
*/
export interface CalendarEventsState {
    byId: Map<number, CalendarEventState>;
    allIds: Array<number>;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * CalendarEvents state
 * initial state.
 */
export const initialState: CalendarEventsState = {
    byId: new Map<number, CalendarEventState>(),
    allIds: new Array<number>(),
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {CalendarEventsState} state1
 * @param {CalendarEventsState} state2
 *
 * @return {boolean}
 */
export function equals(state1: CalendarEventsState, state2: CalendarEventsState = initialState): boolean {
    /*if (state1 === state2) {
        return true;
    }*/
    return false;
}