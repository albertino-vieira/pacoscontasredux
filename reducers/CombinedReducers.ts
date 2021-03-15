import { combineReducers } from "redux"
import requestStatusReducer from "./requeststatus/RequestStatusReducer";

/**
 * Combines all the reducers into a single one.
 * This is the reducer passed to the store upon its creation.
 */
const CombinedReducers = combineReducers(
    {
        requestStatus: requestStatusReducer
    }
);
export default CombinedReducers;