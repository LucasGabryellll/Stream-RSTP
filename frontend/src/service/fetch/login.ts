import { api } from "../api";
import { LoginResponse } from "@/model/loginModel";

interface Props {
    user: string;
    password: string
}

async function userLogin({ user, password }: Props) : Promise<LoginResponse>{
    const { data } = await api.post<LoginResponse>('', {
        "jsonrpc": "2.0",
        "method": "user.login",
        "params": {
            user,
            password
        },
        "id": 1
    });

    return data;
}

export { userLogin };