import React from 'react';
import { Food } from '../models/food';
import FoodRepository from '../api/FoodsRepository.js'
import { Link } from 'react-router-dom'

export class Header extends React.Component{
    foodRepository = new FoodRepository();

    state = { 
          cart: [new Food(1, "Banana", 5, 30, "Fruit", "Super Yummy", ".99", "https://www.kroger.com/product/images/xlarge/front/0000000004011", 5, true, false),
              new Food(0, "Apple", 1, 10, "Fruit", "Yummy", "1.99", "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", 4.5, false, true),
          ],
    };
  
    addItemToCart(item){
      var c = this.state.cart;
      c.push(item);
      this.setState({cart: c});
    }
  
    render(){
      return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Map</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/search">Search <span className="sr-only"></span></Link>
              <Link className="nav-item nav-link active" to="/cart">Cart</Link>
              <Link className="nav-item nav-link active" to="/login">Sign Out</Link>
              </div>
          </div>
      </nav>
      </>
    }
};
  
export default Header;