export class Food{
    constructor(id, name, aisle, stock, category, description, price, imageURL, rating, isFresh, isLocallyGrown) {
        this.id = id;
        this.name = name;
        this.aisle = aisle;
        this.stock = stock;
        this.category = category;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
        this.rating = rating;
        this.quantity = 0;
        this.isFresh = isFresh;
        this.isLocallyGrown = isLocallyGrown;

        // https://plachold.it/150x150
    }

    addQuantity(){
        this.quantity++;
    }

    removeQuantity(){
        this.quantity--;
    }
}
