import React from 'react';
import Header from './header';
import CartService from '../services/cartService'

export class CartView extends React.Component{
  cartService = new CartService();

  state = {
    cart: ''
  };

    
  componentDidMount() {
    var cart = this.cartService.getCart();
    this.setState({cart: cart});
  }

    render(){
      return <>
      <Header></Header>
      <div className="container bg-light">
      <table className="table">
      <thead>
        <tr>
          <th scope="col">Qty</th>
          <th scope="col">Product</th>
          <th scope="col">Aisle</th>
          <th scope="col">Total</th>
          <th></th>
        </tr>
      </thead>
        <tbody>
          { this.state.cart.items !== undefined && this.state.cart.items.length !== 0 && 
            this.state.cart.items.map((x, i) => {
              return <tr key={i}>
                <td>{x.quantity}  </td>
                <td>{x.product.name} <span className="text text-secondary">- ${parseFloat(x.product.price).toFixed(2)}/each</span></td>
                <td>{x.product.aisle}</td>
                <td>${parseFloat(x.totalPrice).toFixed(2)}</td>
                <td> <button type="button" className="btn btn-danger pr-1 pt-0 pl-1 pb-0" 
                    onClick={() =>{
                      var cart = this.state.cart;
                      cart.items[i].quantity--;
                      cart.items[i].totalPrice = cart.items[i].quantity*cart.items[i].product.price;
                      cart.total -= cart.items[i].product.price

                      if(cart.items[i].quantity == 0)
                        cart.items.splice(i, 1);

                      this.setState({
                        cart
                      })
                      this.cartService.setCart(cart);
                    }}
                  > - </button>
                  </td>
              </tr>
            })
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="font-weight-bold">${parseFloat(this.state.cart.total).toFixed(2)}</td>
            <td></td>
          </tr>
      </tbody>
    </table>
    </div>
      </>
    }
  
  };
    
  export default CartView;