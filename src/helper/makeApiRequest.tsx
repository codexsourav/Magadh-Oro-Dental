import axios, { AxiosResponse } from "axios";

export default class MakeApiRequest {
    public path: string;
    public body: any;
    public endPoint: string;
    public method: string;

    public constructor(path: string, body: any = "", method: string = "GET", endPoint: string = "") {
        this.path = path;
        this.body = body;
        this.endPoint = endPoint;
        this.method = method;
    }

    public async send(): Promise<any> {
        try {
            const requestData = await axios({
                method: this.method,
                url: this.endPoint + this.path,
                data: this.body,
            });
            return requestData.data;
        } catch (error) {
            throw error as Error;
        }
    }
}