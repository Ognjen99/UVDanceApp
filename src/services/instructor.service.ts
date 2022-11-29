import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Api } from "../api/api";
import { Instructor } from "../models/instructor.model";
export class InstructorService {
    private readonly api: Api;
    private readonly config: AxiosRequestConfig;

    constructor(config: AxiosRequestConfig) {
        this.api = new Api(config);
        this.config = config;
    }

    public async getInstructors(): Promise<Instructor[]> {

        const response = await this.api.get<string, AxiosResponse<any>>("start.php?func=treners");

        return response.data;
    }
}