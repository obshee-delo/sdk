import { Response } from '../../types';


export type Client = {
    id: string,
    name: string,
    description: string,
    permissions: string[]
}

export type ClientSignUpRequest = Client;

export type ClientRefreshRequest = { id: string };

export type ClientAuthorizationResponse = Response<{
    token: string,
    secret: string
}>;
