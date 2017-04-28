import { RestMenu } from 'app/rest-menu';

//  Restaurant Order Item
export class RestOrderItem {
    id: string;
    menuitem: RestMenu;
    quantity: number;
    created_on: Date;
}
