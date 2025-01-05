export class Item {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    quantity: number;
    constructor(id: number, name: string, price: number, description: string, image: string, category: string, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.quantity = quantity;
        this.category = category;
    }
}