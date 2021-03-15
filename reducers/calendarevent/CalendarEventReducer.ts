import { CalendarEventState, initialState } from "../../states/calendarevent/CalendarEventState";
import { FAILED_CALENDAR_EVENT, RECEIVE_CALENDAR_EVENT, CalendarEventActions, REQUEST_CALENDAR_EVENT } from "../../actions/calendarevent/CalendarEventActions";


/**
 * Calculates the CalendarEventState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {CalendarEventState} state
 * @param {CalendarEventActions} action
 *
 * @return {CalendarEventState}
 */
export default function Reducer(state: CalendarEventState = initialState, action: CalendarEventActions): CalendarEventState {
    switch (action.type) {
        case REQUEST_CALENDAR_EVENT:
            return {
                ...state,
                isFetching: true
            }
        case FAILED_CALENDAR_EVENT:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true
            }
        case RECEIVE_CALENDAR_EVENT:
            return {
                ...state,
                isFetching: false,
                id: action.payload.id,
                date: action.payload.date,
                description: action.payload.description
            }
        default:
            return state;
    }
}