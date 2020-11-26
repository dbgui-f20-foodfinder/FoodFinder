export class Food{
    constructor(id, name, price, numSearches, expirationDate, storeID, locationID, stock, category, isFresh, isLocallyGrown, rating, imageURL, productDesc) {
        this.id = id;
        this.name = name;
        this.aisle = locationID;
        this.stock = stock;
        this.category = category;
        this.description = productDesc;
        this.price = price;
        this.imageURL = imageURL;
        this.rating = rating;
        this.quantity = 0;
        this.isFresh = isFresh;
        this.isLocallyGrown = isLocallyGrown;
        this.expirationDate = expirationDate

        // https://plachold.it/150x150
    }

    addQuantity(){
        this.quantity++;
    }

    removeQuantity(){
        this.quantity--;
    }
}
