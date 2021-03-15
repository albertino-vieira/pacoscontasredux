import { CalendarEventsActions, REQUEST_CALENDAR_EVENTS, FAILED_CALENDAR_EVENTS, RECEIVE_CALENDAR_EVENTS } from "../../actions/calendarevents/CalendarEventsActions";
import { CalendarEventsState, initialState } from "../../states/calendarevents/CalendarEventsState";
import { ReceiveCalendarEventPayload } from "../../actions/calendarevent/CalendarEventActions";
import { receiveCalendarEventActionCreator } from "../../actions/calendarevent/CalendarEventActionsCreator";
import calendarEventReducer from "../calendarevent/CalendarEventReducer";
import { CalendarEventState, initialState as calendarEventInitialState } from "../../states/calendarevent/CalendarEventState";


/**
 * Calculates the CalendarEventsState given a current state 
 * (initial state if none is given) and an action.
 * A new copy of the state with updated values is returned.
 *
 * @param {CalendarEventsState} state
 * @param {CalendarEventsActions} action
 *
 * @return {CalendarEventsState}
 */
export default function calendarEventsReducer(state: CalendarEventsState = initialState, action: CalendarEventsActions): CalendarEventsState {
    switch (action.type) {
        case REQUEST_CALENDAR_EVENTS:
            return {
                ...state,
                isFetching: true

            }
        case FAILED_CALENDAR_EVENTS:
            return {
                ...state,
                isFetching: false,
                fetchingFailed: true

            }
        case RECEIVE_CALENDAR_EVENTS:
            return {
                ...state,
                isFetching: false,
                byId: byId(state.byId, action.payload.calendarEvents),
                allIds: allIds(state.allIds, action.payload.calendarEvents)
            }
        default:
            return state;
    }
}

function byId(byIdP: Map<number, CalendarEventState>, calendarEventsP: Array<ReceiveCalendarEventPayload>): Map<number, CalendarEventState> {
    let updatedById = byIdP;

    calendarEventsP.forEach((calendarEventP) => {
        let calendarEvent: CalendarEventState;
        if (updatedById.get(calendarEventP.id)) {
            calendarEvent = calendarEventReducer(updatedById.get(calendarEventP.id), receiveCalendarEventActionCreator(calendarEventP.id, calendarEventP.date, calendarEventP.description))
        } else {
            calendarEvent = {
                ...calendarEventInitialState,
                id: calendarEventP.id,
                date: calendarEventP.date,
                description: calendarEventP.description
            }

        }
        updatedById.set(calendarEvent.id, calendarEvent);
    })
    return updatedById;
}

function allIds(allIdsP: Array<number>, calendarEventsP: Array<ReceiveCalendarEventPayload>): Array<number> {
    let updatedAllIds: Array<number> = [...allIdsP];

    calendarEventsP.forEach((calendarEventP) => {
        updatedAllIds.push(calendarEventP.id);
    })
    return updatedAllIds;
}