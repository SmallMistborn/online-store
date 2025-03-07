import axios, {AxiosResponse} from "axios";
import {IUser} from "@/models/IUser";


export default class UserService {
    // static async getUsers(): Promise<IUser[]> {
    //     const response: AxiosResponse<IUser[]> = await axios.get("/api/users");
    //     return response.data;
    // }
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>("http://localhost:3000/api/users")
    }
    static async registerUser(userData: IUser): Promise<AxiosResponse<IUser>> {
        return axios.post<IUser>("http://localhost:3000/api/users", userData);
    }
}

