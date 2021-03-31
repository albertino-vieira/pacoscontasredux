import { ThunkAction, ThunkDispatch } from "redux-thunk";
import CalendarService from "../../../services/calendar/CalendarService";
import { CalendarEventsActions, CreateCalendarEventsAction, ReceiveCalendarEventsAction } from "../../actions/calendarevents/CalendarEventsActions";
import { failedCalendarEventsActionCreator, receiveCalendarEventsActionCreator, requestCalendarEventsActionCreator } from "../../actions/calendarevents/CalendarEventsActionsCreator";

/** 
 * CreateCalendarEventParams parameters interface 
 * for type definition. 
 */
export interface CreateCalendarEventParams {
    date: Date;
    description: string;
}
/**
 * Posts a user and launches 
 * the necessary action to update 
 * the application state.
 *
 * @param {CreateCalendarEventParams} params
 *
 * @return {Promise<string>}
 */
export function createDocumentType(params: CreateCalendarEventParams): ThunkAction<Promise<CalendarEventsActions>, ReceiveCalendarEventsAction, CreateCalendarEventParams, CalendarEventsActions> {
    return (dispatch: ThunkDispatch<ReceiveCalendarEventsAction, CreateCalendarEventParams, CalendarEventsActions>) => {
        dispatch(requestCalendarEventsActionCreator());
        return CalendarService.create(params.date, params.description)
            .then((response: any) => {
                //response
                return dispatch(receiveCalendarEventsActionCreator([{ id: 1, date: new Date(), description: "" }]));
            })
            .catch(() => {
                return dispatch(failedCalendarEventsActionCreator());
            });
    };
}