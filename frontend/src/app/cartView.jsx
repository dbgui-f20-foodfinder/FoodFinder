import React from 'react';
import Header from './header';
import CartService from '../services/cartService'

export class CartView extends React.Component{
  cartService = new CartService();

  state = {
    cart: []
  };

    
  componentDidMount() {
    var cart = this.cartService.getCart();
    this.setState({cart: cart});
    console.log(cart);
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
          <th scope="col">Total</th>
        </tr>
      </thead>
        <tbody>
          { this.state.cart.items !== undefined && this.state.cart.items.length !== 0 && 
            this.state.cart.items.map((x, i) => {
              return <tr key={i}>
                <td>{x.quantity}</td>
                <td>{x.product.name} <span className="text text-secondary">- ${x.product.price}/each</span></td>
                <td>${x.totalPrice}</td>
              </tr>
            })
          }
          <tr>
            <td></td>
            <td></td>
            <td className="font-weight-bold">${this.state.cart.total}</td>
          </tr>
      </tbody>
    </table>
    </div>
      </>
    }
  
  };
    
  export default CartView;