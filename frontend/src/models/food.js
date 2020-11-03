export class Food{
    constructor(id, name, aisle, stock, grouping, description, price, imageURL, rating) {
        this.id = id;
        this.name = name;
        this.aisle = aisle;
        this.stock = stock;
        this.grouping = grouping;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
        this.rating = rating;
        this.quantity = 0;
    }

    addQuantity(){
        this.quantity++;
    }

    removeQuantity(){
        this.quantity--;
    }
}
