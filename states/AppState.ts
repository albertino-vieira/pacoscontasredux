import { RequestsStatusState, initialState as requestsStatusInitialState } from "./requestsstatus/RequestsStatusState";

/**
 * Application state interface
 * for type definition.
 */
export interface AppState {
    requestsStatus: RequestsStatusState
}
/**
 * Application initial state.
 */
export const initialState: AppState = {
    requestsStatus: requestsStatusInitialState
};