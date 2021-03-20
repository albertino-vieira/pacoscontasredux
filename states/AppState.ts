import { CalendarEventsState, initialState as calendarEventsInitialState } from "./calendarevents/CalendarEventsState";
import { DocumentState, initialState as documentsInitialState } from "./document/DocumentState";
import { DocumentTypesState, initialState as documentTypesInitialState } from "./documenttypes/DocumentTypesState";
import { RequestsState, initialState as requestsInitialState } from "./requests/RequestsState";
import { RequestsStatusState, initialState as requestsStatusInitialState } from "./requestsstatus/RequestsStatusState";
import { RequestTypesState, initialState as requestTypesInitialState } from "./requesttypes/RequestTypesState";
import { UserState, initialState as userInitialState } from "./user/UserState";

/**
 * Application state interface
 * for type definition.
 */
export interface AppState {
    calendarEvents: CalendarEventsState;
    documents: DocumentState;
    documentTypes: DocumentTypesState;
    requests: RequestsState;
    requestsStatus: RequestsStatusState;
    requestTypes: RequestTypesState;
    user: UserState;
}
/**
 * Application initial state.
 */
export const initialState: AppState = {
    calendarEvents: calendarEventsInitialState,
    documents: documentsInitialState,
    documentTypes: documentTypesInitialState,
    requests: requestsInitialState,
    requestsStatus: requestsStatusInitialState,
    requestTypes: requestTypesInitialState,
    user: userInitialState,
};