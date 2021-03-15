import { FailedCalendarEventAction, FAILED_CALENDAR_EVENT, ReceiveCalendarEventAction, RECEIVE_CALENDAR_EVENT, RequestCalendarEventAction, REQUEST_CALENDAR_EVENT } from "./CalendarEventActions";

/**
 * Creates a REQUEST_CALENDAR_EVENT action.
 * 
 * @return {RequestCalendarEventAction}
 */
export function requestCalendarEventActionCreator(): RequestCalendarEventAction {
    return {
        type: REQUEST_CALENDAR_EVENT
    };
}

/**
 * Creates a FAILED_CALENDAR_EVENT action.
 * 
 * @return {FailedCalendarEventAction}
 */
export function failedCalendarEventActionCreator(): FailedCalendarEventAction {
    return {
        type: FAILED_CALENDAR_EVENT
    };
}

/**
 * Creates a RECEIVE_CALENDAR_EVENT action.
 * 
 * @return {ReceiveCalendarEventAction}
 */
export function receiveCalendarEventActionCreator(idP: number, dateP: Date, descriptionP: string): ReceiveCalendarEventAction {
    return {
        type: RECEIVE_CALENDAR_EVENT,
        payload: {
            id: idP,
            date: dateP,
            description: descriptionP
        }
    };
}