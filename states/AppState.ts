import { CalendarEventsState, initialState as calendarEventsInitialState } from "./calendarevents/CalendarEventsState";
import { DocumentTypesState, initialState as documentTypesInitialState } from "./documenttypes/DocumentTypesState";
import { RequestsState, initialState as requestsInitialState } from "./requests/RequestsState";
import { RequestsStatusState, initialState as requestsStatusInitialState } from "./requestsstatus/RequestsStatusState";
import { RequestTypesState, initialState as requestTypesInitialState } from "./requesttypes/RequestTypesState";

/**
 * Application state interface
 * for type definition.
 */
export interface AppState {
    calendarEvents: CalendarEventsState;
    documentTypes: DocumentTypesState;
    requests: RequestsState;
    requestsStatus: RequestsStatusState;
    requestTypes: RequestTypesState;
}
/**
 * Application initial state.
 */
export const initialState: AppState = {
    calendarEvents: calendarEventsInitialState,
    documentTypes: documentTypesInitialState,
    requests: requestsInitialState,
    requestsStatus: requestsStatusInitialState,
    requestTypes: requestTypesInitialState

};