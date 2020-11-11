import React from 'react';
import { Food } from '../models/food';
import SearchView from './searchView.jsx';
import CartView from './cartView.jsx';
import ItemView from './itemView';

export class MapView extends React.Component{
  state = { 
        search: "",
        foods: [new Food(0, "Banana", 5, 30, "Fruit", "Super Yummy", ".99", "https://www.kroger.com/product/images/xlarge/front/0000000004011", 5, true, false),
                new Food(1, "Apple", 1, 10, "Fruit", "Yummy", "1.99", "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", 4.5, false, true),
                new Food(2, "Brocolli", 7, 12, "Vegetable", "Yucky", "5.99", "https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/broccoli_commodity-page.png", 1.5, true, true) 
        ],
        cart: [new Food(1, "Banana", 5, 30, "Fruit", "Super Yummy", ".99", "https://www.kroger.com/product/images/xlarge/front/0000000004011", 5, true, false),
            new Food(0, "Apple", 1, 10, "Fruit", "Yummy", "1.99", "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", 4.5, false, true),
              
        ]
  };

  addItemToCart(item){
    var c = this.state.cart;
    c.push(item);
    this.setState({cart: c});
  }

  render(){
    return <>
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

      <SearchView foods={this.state.foods}> </SearchView>
      <CartView cart={this.state.cart}> </CartView>
      <ItemView addToCart={item => this.addItemToCart(item)} item={this.state.foods[2]}></ItemView>
    </>
  }

};
  
export default MapView;