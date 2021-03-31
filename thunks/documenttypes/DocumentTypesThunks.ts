import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { CreateDocumentTypesAction, DocumentTypesActions, ReceiveDocumentTypesPayload } from "../../actions/documenttypes/DocumentTypesActions"
import { requestDocumentTypesActionCreator, failedDocumentTypesActionCreator, receiveDocumentTypesActionCreator } from "../../actions/documenttypes/DocumentTypesActionsCreator"
import DocumentTypeService from "../../../services/documenttype/DocumentTypeService";
/** 
 * CreateDocumentType parameters interface 
 * for type definition. 
 */
export interface CreateDocumentTypeParams {
    type: string;
}
/**
 * Posts a user and launches 
 * the necessary action to update 
 * the application state.
 *
 * @param {CreateUserParams} params
 *
 * @return {Promise<SessionActions>}
 */
export function createDocumentType(params: CreateDocumentTypeParams): ThunkAction<Promise<DocumentTypesActions>, CreateDocumentTypesAction, CreateDocumentTypeParams, DocumentTypesActions> {
    return (dispatch: ThunkDispatch<ReceiveDocumentTypesPayload, CreateDocumentTypeParams, DocumentTypesActions>) => {
        dispatch(requestDocumentTypesActionCreator());
        return DocumentTypeService.create(params.type)
            .then((response: any) => {
                //response
                return dispatch(receiveDocumentTypesActionCreator([{ id: 1, type: "1" }]));
            })
            .catch(() => {
                return dispatch(failedDocumentTypesActionCreator());
            });
    };
}