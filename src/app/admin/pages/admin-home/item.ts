export interface ItemAdmin {
    id: number,
    customer_name: string,
    address: string,
    phone: string,
    email: string,
    payment_method: string,
    status: number,

    [key: string]: string | number;
}