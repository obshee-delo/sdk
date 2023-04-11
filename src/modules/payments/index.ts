import { ApiAdapter } from "../../adapter";
import { CrudService } from "../../service";
import { Payment, PaymentNewRequest, PaymentNewResponse } from "./types";


export class PaymentService extends CrudService<Payment> {
    constructor(adapter: ApiAdapter) {
        super(adapter, 'payment');
    }

    public findByCategory(parameters: PaymentNewRequest): Promise<PaymentNewResponse> {
        return this.adapter.post<PaymentNewResponse>(`payment/new`, parameters);
    }
}
