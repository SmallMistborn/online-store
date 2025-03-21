import axios, {AxiosResponse} from "axios";
import {IUser} from "@/models/IUser";


export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>("https://run.mocky.io/v3/a04ac0c1-f155-4bc5-9063-d9ad058a0b3b")
    }
    static async registerUser(userData: IUser): Promise<AxiosResponse<IUser>> {
        return axios.post<IUser>("https://run.mocky.io/v3/a04ac0c1-f155-4bc5-9063-d9ad058a0b3b", userData);
    }
}


