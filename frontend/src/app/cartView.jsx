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
        </tr>
      </thead>
        <tbody>
          { this.state.cart.items !== undefined && this.state.cart.items.length !== 0 && 
            this.state.cart.items.map((x, i) => {
              console.log(x);
              return <tr key={i}>
                <td>{x.quantity}</td>
                <td>{x.product.name} <span className="text text-secondary">- ${parseFloat(x.product.price).toFixed(2)}/each</span></td>
                <td>{x.product.aisle}</td>
                <td>${x.totalPrice}</td>
              </tr>
            })
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="font-weight-bold">${parseFloat(this.state.cart.total).toFixed(2)}</td>
          </tr>
      </tbody>
    </table>
    </div>
      </>
    }
  
  };
    
  export default CartView;