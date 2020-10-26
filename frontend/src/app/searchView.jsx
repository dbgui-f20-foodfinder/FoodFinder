import React from 'react';
import {Food} from '../models/food';


export class SearchView extends React.Component{
  state = { 
        search: "",
        foods: [ new Food(0, "Apple", 1, 10, "Fruit", "Yummy", "1.99", "https://placehold.it/300x300", 4.5),
                new Food(1, "Banana", 5, 30, "Fruit", "Super Yummy", ".99", "https://placehold.it/300x300", 5),
                new Food(2, "Brocolli", 7, 12, "Vegetable", "Yucky", "5.99", "https://placehold.it/300x300", 1.5) ]
  };

  

  render(){
    return <div>
      <label htmlFor="searchBar"> Search For Food </label>
      <input name="searchBar"
              id="searchBar"
              className="form-control"
              type="text"
              value={this.state.search}
              onChange={event => this.setState({search: event.target.value })} />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Aisle #</th>
            <th scope="col">Stock</th>
            <th scope="col">Food Group</th>
            <th scope="col">Cost</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.foods.map(x => {
            if(x.name.toLowerCase().includes(this.state.search.toLowerCase()) || this.state.search === "")
            return <tr>
              <td> {x.id} </td>
              <td> {x.name} </td>
              <td> {x.aisle} </td>
              <td> {x.stock} </td>
              <td> {x.grouping} </td>
              <td> ${x.price} </td>
              <td> {x.rating} </td>
            </tr>
            return null;})
          }
        </tbody>
      </table>
    </div>
  }

};
  
export default SearchView;