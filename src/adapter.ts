import { Axios, AxiosRequestConfig } from 'axios';


export interface Connection {
    transport: string,
    host: string,
    port: number
}

export interface Credentials {
    token: string
}

export interface RequestParameters {
    method: string,
    path: string,
    data?: any,
    params?: any
}


export class ApiAdapter {
    private httpAdapter: Axios = new Axios({});


    constructor(
        private connection: Connection,
        private credentials: Credentials
    ) {}

    private url(path=''): string {
        let { transport, host, port } = this.connection;

        return `${transport}://${host}:${port}/${path}`;
    }

    private get token(): string {
        return this.credentials.token;
    }

    private requestConfig(payload={}): AxiosRequestConfig {
        return Object.assign({
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        }, payload);
    }

    private requestArguments<IncludesData extends boolean>(
        path: string, params?: any, data?: any
    ): IncludesData extends true
        ? [ string, string, AxiosRequestConfig ]
        : [ string, AxiosRequestConfig ]
     {
        let args = [ this.url(path) ];

        if (data) args.push(JSON.stringify(data));

        return [ ...args, this.requestConfig(params) ] as any;
    }

    public async get<T>(path: string, params={}): Promise<T> {
        let response = await this.httpAdapter.get(...this.requestArguments<false>(path, params));
        return JSON.parse(response.data) as Promise<T>;
    }

    public async post<T>(path: string, params={}, data={}): Promise<T> {
        let response = await this.httpAdapter.post(...this.requestArguments<true>(path, params, data));
        return JSON.parse(response.data) as Promise<T>;
    }

    public async patch<T>(path: string, params={}, data={}): Promise<T> {
        let response = await this.httpAdapter.patch(...this.requestArguments<true>(path, params, data));
        return JSON.parse(response.data) as Promise<T>;
    }

    public async delete<T>(path: string, params={}): Promise<T> {
        let response = await this.httpAdapter.get(...this.requestArguments<false>(path, params));
        return JSON.parse(response.data) as Promise<T>;
    }
}
