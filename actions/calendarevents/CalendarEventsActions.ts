import { ReceiveCalendarEventPayload } from "../calendarevent/CalendarEventActions";

/**
 * Identifier for the action of
 * requesting the calendar events
 * payload.
 */
export const REQUEST_CALENDAR_EVENTS = 'REQUEST_CALENDAR_EVENTS';
/**
 * Identifier for the action of
 * failing the request on
 * calendar events.
 */
export const FAILED_CALENDAR_EVENTS = 'FAILED_CALENDAR_EVENTS';
/**
 * Identifier for the action of
 * receiving the request on
 * calendar events
 */
export const RECEIVE_CALENDAR_EVENTS = 'RECEIVE_CALENDAR_EVENTS';

/**
 * Identifier for the payload of
 * receiving the calendar events.
 */
export interface ReceiveCalendarEventsPayload {
    calendarEvents: Array<ReceiveCalendarEventPayload>;
}

/** 
 * REQUEST_CALENDAR_EVENTS action interface
 * for type definition. 
 */
export interface RequestCalendarEventsAction {
    type: typeof REQUEST_CALENDAR_EVENTS;
}

/** 
 * FAILED_CALENDAR_EVENTS action interface
 * for type definition. 
 */
export interface FailedCalendarEventsAction {
    type: typeof FAILED_CALENDAR_EVENTS;
}

/** 
 * RECEIVE_CALENDAR_EVENTS action interface
 * for type definition. 
 */
export interface ReceiveCalendarEventsAction {
    type: typeof RECEIVE_CALENDAR_EVENTS;
    payload: ReceiveCalendarEventsPayload;
}

export type CalendarEventsActions = RequestCalendarEventsAction | FailedCalendarEventsAction | ReceiveCalendarEventsAction;