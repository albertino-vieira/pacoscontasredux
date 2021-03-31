import { ThunkAction, ThunkDispatch } from "redux-thunk";
import UsersService from "../../../services/user/UserService";
import { ReceiveUserPayload } from "../../actions/user/UserActions";
import { CreateUsersAction, UsersActions } from "../../actions/users/UsersActions";
import { failedUsersActionCreator, receiveUsersActionCreator, requestUsersActionCreator } from "../../actions/users/UsersActionsCreator";

/** 
 * createUser parameters interface 
 * for type definition. 
 */
export interface CreateUserParams {
    name: string;
    nif: number;
    cae: string;
    contact: string;
    secondContact: string;
    email: string;
    address: string;
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
export function createUser(params: CreateUserParams): ThunkAction<Promise<UsersActions>, CreateUsersAction, CreateUserParams, UsersActions> {
    return (dispatch: ThunkDispatch<ReceiveUserPayload, CreateUserParams, UsersActions>) => {
        dispatch(requestUsersActionCreator());
        return UsersService.create(params.name, params.nif, params.cae, params.contact, params.secondContact, params.email, params.address)
            .then((response: any) => {
                //response
                return dispatch(receiveUsersActionCreator([{ id: 1, name: params.name, email: params.email, token: "", nif: 1234, role: "user", }]));
            })
            .catch(() => {
                return dispatch(failedUsersActionCreator());
            });
    };
}