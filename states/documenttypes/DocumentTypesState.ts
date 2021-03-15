import { DocumentTypeState, equals as documentTypeStateEquals } from "../documenttype/DocumentTypeState";

/**
 * DocumentTypes state
* for type definition.
*/
export interface DocumentTypesState {
    byId: Map<number, DocumentTypeState>;
    allIds: Array<number>;
    isFetching: boolean;
    fetchingFailed: boolean;
}

/**
 * DocumentTypes state
 * initial state.
 */
export const initialState: DocumentTypesState = {
    byId: new Map<number, DocumentTypeState>();
    allIds: new Array<number>();
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {DocumentTypesState} state1
 * @param {DocumentTypesState} state2
 *
 * @return {boolean}
 */
export function equals(state1: DocumentTypesState, state2: DocumentTypesState = initialState): boolean {
    let processed: Array<number> = new Array<number>();
    for (let documentType of state1.allIds) {
        processed.push(documentType);
        if (!state2.allIds.includes(documentType)) {
            return false;
        } else {
            let documentTypeFrom1: DocumentTypeState | undefined = state1.byId.get(documentType);
            let documentTypeFrom2: DocumentTypeState | undefined = state2.byId.get(documentType);
            if (documentTypeFrom1 === undefined || documentTypeFrom2 === undefined) {
                return false;
            } else {
                if (!documentTypeStateEquals(documentTypeFrom1, documentTypeFrom2)) {
                    return false;
                }
            }
        }
    }
    if (processed.length !== state2.allIds.length) {
        return false;
    }
    return true;
}