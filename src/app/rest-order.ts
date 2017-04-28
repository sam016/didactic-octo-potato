import { RestOrderItem } from 'app/rest-order-item';

export class RestOrder {
    ID: string;
    ItemsCount: Number;
    Items: RestOrderItem[];
    Cost: Number;
    Date: Date;
}
