import { Response } from '../../types';


export interface Receipt {
    id: string,
    amount: number,
    createdAt: string,
    description: string
}

export type Payment = {
    userId: string,
    courseName: string,
    receipt: Receipt
}

export type PaymentNewRequest = Payment;

export type PaymentNewResponse = Response<{}>;
