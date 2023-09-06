import {ItemAdmin} from "./item.interface";

export class DefaultItemAdmin implements ItemAdmin {
    // @ts-ignore
    id: number;
    username: string = "";
    phone: string = "";
    email: string = "";
    address: string = "";
    name: string = "";
    password: string = "";

    [key: string]: string | number;
}