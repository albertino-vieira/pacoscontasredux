/**
 * Identifier for the action of
 * requesting the calendar event
 * payload.
 */
export const REQUEST_CALENDAR_EVENT = 'REQUEST_CALENDAR_EVENT';
/**
 * Identifier for the action of
 * failing the request on
 * calendar event.
 */
export const FAILED_CALENDAR_EVENT = 'FAILED_CALENDAR_EVENT';
/**
 * Identifier for the action of
 * receiving the request on
 * calendar event.
 */
export const RECEIVE_CALENDAR_EVENT = 'RECEIVE_CALENDAR_EVENT';

/**
 * Identifier for the payload of
 * receiving the calendar event.
 */
export interface ReceiveCalendarEventPayload {
    id: number;
    date: Date;
    description: string;
}

/** 
 * REQUEST_CALENDAR_EVENT action interface
 * for type definition. 
 */
export interface RequestCalendarEventAction {
    type: typeof REQUEST_CALENDAR_EVENT;
}

/** 
 * FAILED_CALENDAR_EVENT action interface
 * for type definition. 
 */
export interface FailedCalendarEventAction {
    type: typeof FAILED_CALENDAR_EVENT;
}

/** 
 * RECEIVE_CALENDAR_EVENT action interface
 * for type definition. 
 */
export interface ReceiveCalendarEventAction {
    type: typeof RECEIVE_CALENDAR_EVENT;
    payload: ReceiveCalendarEventPayload;
}

export type CalendarEventActions = RequestCalendarEventAction | FailedCalendarEventAction | ReceiveCalendarEventAction;