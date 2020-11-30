import React from 'react';
import FoodRepository from '../api/FoodsRepository.js'
import { Link } from 'react-router-dom'
import {CartService} from '../services/cartService'

export class Header extends React.Component{
    foodRepository = new FoodRepository();
    cartService = new CartService();
  
    addItemToCart(item){
      var c = this.state.cart;
      c.push(item);
      this.setState({cart: c});
    }
  
    render(){
      return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/map">Map</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/search" onClick={() => localStorage.setItem("userCode", 0)}>Search<span className="sr-only"></span></Link>
              <Link className="nav-item nav-link active" to="/cart">Cart</Link>
              <Link className="nav-item nav-link active" to="/myProfile">Profile</Link>
              <Link className="nav-item nav-link active" onClick={()=>{ this.cartService.clearCart() }}to="/login">Sign Out</Link>
              </div>
          </div>
      </nav>
      </>
    }
};
  
export default Header;