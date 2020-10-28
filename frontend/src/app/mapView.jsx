import React from 'react';
import {Food} from '../models/food';
import SearchView from './searchView.jsx';

export class MapView extends React.Component{
  state = { 
        search: "",
        foods: [ new Food(0, "Apple", 1, 10, "Fruit", "Yummy", "1.99", "https://placehold.it/300x300", 4.5),
                new Food(1, "Banana", 5, 30, "Fruit", "Super Yummy", ".99", "https://placehold.it/300x300", 5),
                new Food(2, "Brocolli", 7, 12, "Vegetable", "Yucky", "5.99", "https://placehold.it/300x300", 1.5) 
            ],
        cart: []
  };

  render(){
    return <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Search for Item <span class="sr-only"></span></a>
            <a class="nav-item nav-link" href="#">Cart</a>
            <a class="nav-item nav-link" href="#">Sign Out</a>
            </div>
        </div>
    </nav>

      <SearchView foods={this.state.foods}> </SearchView>
    </>
  }

};
  
export default MapView;