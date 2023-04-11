import { ApiAdapter, Connection, Credentials } from "./adapter";
import { CourseService } from "./modules/course";
import { PaymentService } from "./modules/payments";
import { UserService } from "./modules/user";


export class Sdk {
    private adapter: ApiAdapter;

    public user: UserService;
    public course: CourseService;
    public payment: PaymentService;

    constructor(adapter: ApiAdapter) {
        this.adapter = adapter;

        this.user = new UserService(adapter);
        this.course = new CourseService(adapter);
        this.payment = new PaymentService(adapter);
    }
}

export * from './adapter';


// Инициализация

export const sdk = new Sdk(
    new ApiAdapter(
        {
            // конфиг соединения
            // см. Connection в src/adapter
        } as Connection,
        {
            // конфиг доступа
            // см. Credentials в src/adapter
        } as Credentials
    )
);

// Модули:

sdk.user;
sdk.course;
sdk.payment;

// Примеры

sdk.user.get({ id: 'id' });

let receiptData; // fetch from somewhere
sdk.payment.create({
    userId: 'id',
    courseName: 'history',
    receipt: receiptData as any
});
