import { ReceiveCalendarEventPayload } from "../calendarevent/CalendarEventActions";
import { CreateCalendarEventsAction, CREATE_CALENDAR_EVENTS, FailedCalendarEventsAction, FAILED_CALENDAR_EVENTS, ReceiveCalendarEventsAction, RECEIVE_CALENDAR_EVENTS, RequestCalendarEventsAction, REQUEST_CALENDAR_EVENTS } from "./CalendarEventsActions";

/**
 * Creates a REQUEST_CALENDAR_EVENTS action.
 * 
 * @return {RequestCalendarEventsAction}
 */
export function requestCalendarEventsActionCreator(): RequestCalendarEventsAction {
    return {
        type: REQUEST_CALENDAR_EVENTS
    };
}

/**
 * Creates a FAILED_CALENDAR_EVENTS action.
 * 
 * @return {FailedCalendarEventsAction}
 */
export function failedCalendarEventsActionCreator(): FailedCalendarEventsAction {
    return {
        type: FAILED_CALENDAR_EVENTS
    };
}

/**
 * Creates a RECEIVE_CALENDAR_EVENTS action.
 * 
 * @return {ReceiveCalendarsEventAction}
 */
export function receiveCalendarEventsActionCreator(calendarEventsP: Array<ReceiveCalendarEventPayload>): ReceiveCalendarEventsAction {
    return {
        type: RECEIVE_CALENDAR_EVENTS,
        payload: {
            calendarEvents: calendarEventsP
        }
    };
}

/**
 * Creates a RECEIVE_CALENDAR_EVENTS action.
 * 
 * @return {CreateCalendarEventsAction}
 */
export function createCalendarEventsActionCreator(dateP: Date, descriptionP: string): CreateCalendarEventsAction {
    return {
        type: CREATE_CALENDAR_EVENTS,
        payload: {
            date: dateP,
            description: descriptionP
        }
    };
}