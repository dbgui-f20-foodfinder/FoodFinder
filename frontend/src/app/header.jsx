import React from 'react';
import { Food } from '../models/food';
import SearchView from './searchView.jsx';
import CartView from './cartView.jsx';
import ItemView from './itemView';
import FoodRepository from '../api/FoodsRepository.js'
import MapView from './mapView';

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
        <h1> Dis da header </h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Search for Item <span className="sr-only"></span></a>
              <a className="nav-item nav-link" href="#">Cart</a>
              <a className="nav-item nav-link" href="#">Sign Out</a>
              </div>
          </div>
      </nav>
  
        {/* <MapView> </MapView> */}
        <SearchView> </SearchView>
        <CartView cart={this.state.cart}> </CartView>
        <ItemView addToCart={item => this.addItemToCart(item)} itemID={5}></ItemView>
      </>
    }
};
  
export default Header;