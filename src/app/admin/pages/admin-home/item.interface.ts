export interface ItemAdmin {
    id: number,
    username: string,
    address: string,
    phone: string,
    email: string,
    name: string,
    password: string,

    [key: string]: string | number;
}