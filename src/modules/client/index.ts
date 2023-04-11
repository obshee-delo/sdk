import { ApiAdapter } from "../../adapter";
import { CrudService } from "../../service";
import { Client, ClientAuthorizationResponse, ClientRefreshRequest, ClientSignUpRequest } from "./types";


export class ClientService extends CrudService<Client> {
    constructor(adapter: ApiAdapter) {
        super(adapter, 'client');
    }

    public signUp(parameters: ClientSignUpRequest): Promise<ClientAuthorizationResponse> {
        return this.adapter.post<ClientAuthorizationResponse>('client/signup', parameters);
    }

    public refresh(parameters: ClientRefreshRequest): Promise<ClientAuthorizationResponse> {
        return this.adapter.post<ClientAuthorizationResponse>(`client/refresh/${parameters.id}`);
    }
}
