import { DocumentState, equals as documentStateEquals } from "../document/DocumentState";

/**
 * Documents state
* for type definition.
*/
export interface DocumentsState {
    byId: Map<number, DocumentState>;
    allIds: Array<number>;
    isFetching: boolean;
    fetchingFailed: boolean;

}

/**
 * Documents state
 * initial state.
 */
export const initialState: DocumentsState = {
    byId: new Map<number, DocumentState>(),
    allIds: new Array<number>(),
    isFetching: false,
    fetchingFailed: false
};

/**
 * Compares two web socket states and
 * checks if they are equal.
 *
 * @param {DocumentsState} state1
 * @param {DocumentsState} state2
 *
 * @return {boolean}
 */
export function equals(state1: DocumentsState, state2: DocumentsState = initialState): boolean {
    let processed: Array<number> = new Array<number>();
    for (let document of state1.allIds) {
        processed.push(document);
        if (!state2.allIds.includes(document)) {
            return false;
        } else {
            let documentFrom1: DocumentState | undefined = state1.byId.get(document);
            let documentFrom2: DocumentState | undefined = state2.byId.get(document);
            if (documentFrom1 === undefined || documentFrom2 === undefined) {
                return false;
            } else {
                if (!documentStateEquals(documentFrom1, documentFrom2)) {
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