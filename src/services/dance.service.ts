import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Api } from "../api/api";
import { DanceStyle } from "../models/dancestyle.model";

export class DanceService {
    private readonly api: Api;
    private readonly config: AxiosRequestConfig;

    constructor(config: AxiosRequestConfig) {
        this.api = new Api(config);
        this.config = config;
    }

    public async getDanceStyle(): Promise<DanceStyle[]> {
        // // Add a request interceptor
        // this.api.interceptors.request.use(function (iconfig) {
        //     console.log('Starting Request', JSON.stringify(iconfig, null, 2));
        //     return iconfig;
        // }, function (error) {
        //     // Do something with request error
        //     return Promise.reject(error);
        // });

        const response = await this.api.get<string, AxiosResponse<any>>('start.php?func=dancestyle');

        return response.data;
    }
}