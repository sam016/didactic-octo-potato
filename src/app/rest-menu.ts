export class RestMenu {
    id: string;
    title: string;
    price: number;
    description: string;
    type: string;
    created_on: Date;

    isVeg() {
        return this.type === 'veg';
    }
}
