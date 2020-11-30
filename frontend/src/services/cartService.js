import Cart from './../models/cart';
import CartItem from './../models/cartItem';

export class CartService {
    getCart() {
        var rawCart = localStorage.getItem("cart");
        if(rawCart){
            return JSON.parse(rawCart);
        }
        return new Cart();
    }

    addToCart(product) {
        let cart = this.getCart();
        //window.cart || new Cart();
        let existing = cart.items.find(x => x.product.id == product.id);
        if (existing) {
            existing.quantity += 1;
            existing.totalPrice = existing.product.price * existing.quantity;
        } else {
            cart.items.push(new CartItem(product, 1, product.price));
        }

        cart.total = cart.items.map(x => x.totalPrice).reduce((x, y) => x + y);
        localStorage.setItem("cart", JSON.stringify(cart));
        // window.cart = cart;
    }

    clearCart(){
        localStorage.setItem("cart", JSON.stringify(new Cart()));
    }

    setCart(cart){
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

export default CartService;