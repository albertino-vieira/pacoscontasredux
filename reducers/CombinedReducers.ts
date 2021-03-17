import { combineReducers } from "redux"
import calendarEventsReducer from "./calendarevents/CalendarEventsReducer";
import documentTypesReducer from "./documenttypes/DocumentTypesReducer";
import requestsReducer from "./requests/RequestsReducer";
import requestsStatusReducer from "./requestsstatus/RequestsStatusReducer";
import requestTypesReducer from "./requesttypes/RequestTypesReducer";
import userReducer from "./user/UserReducer";

/**
 * Combines all the reducers into a single one.
 * This is the reducer passed to the store upon its creation.
 */
const CombinedReducers = combineReducers(
    {
        calendarEvents: calendarEventsReducer,
        documentTypes: documentTypesReducer,
        requests: requestsReducer,
        requestsStatus: requestsStatusReducer,
        requestTypes: requestTypesReducer,
        user: userReducer

    }
);
export default CombinedReducers;