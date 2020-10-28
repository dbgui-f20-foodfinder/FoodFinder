import React from 'react';
import { Food } from '../models/food';


export class SearchView extends React.Component{
  state = { 
        search: "",
        foods: this.props.foods,
        sort: "Hello"
  }; 

  sortItems(){
    console.log(this.state.foods)
    console.log(this.state.sort);

    switch(this.state.sort){
      case "ID":
        this.foods.sort((a, b) => (a.id > b.id) ? 1 : -1);
        break;
      case "Name":
        console.log(this.state.foods)
        this.foods.sort((a, b) => (a.name > b.name) ? 1 : -1);
        break;
      case "Aisle":
        this.foods.sort((a, b) => (a.aisle > b.aisle) ? 1 : -1);
        break;
      case "Stock":
        this.foods.sort((a, b) => (a.stock > b.stock) ? 1 : -1);
        break; 
      case "Food-Group":
        this.foods.sort((a, b) => (a.grouping > b.grouping) ? 1 : -1);
        break; 
      case "Cost":
        this.foods.sort((a, b) => (a.cost > b.cost) ? 1 : -1);
        break;
      case "Rating":
        this.foods.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
        break;
    }
  }

  render(){
    return <div>
      <h1> Search View</h1>
      <label htmlFor="searchBar"> Search For Food </label>
      <input name="searchBar"
              id="searchBar"
              className="form-control"
              type="text"
              value={this.state.search}
              onChange={event => this.setState({sort: event.target.value })} />
      <select
              name="sort"
              id="sort"
              className="form-control"
              value={this.state.sort}
              onChange={event => {
                this.setState({sort: event.target.value})
                this.sortItems();
              }}>
              <option value="ID">ID</option>
              <option value="Name">Name</option>
              <option value="Aisle">Aisle #</option>
              <option value="Stock">Stock</option>
              <option value="Food-Group">Food Group</option>
              <option value="Cost">Cost</option>
              <option value="Rating">Rating</option>
          </select>
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
            this.props.foods.map(x => {
              if(x.name.toLowerCase().includes(this.state.search.toLowerCase()) || this.state.search === ""){
                return <tr  key={x.id}>
                  <td> {x.id} </td>
                  <td> {x.name} </td>
                  <td> {x.aisle} </td>
                  <td> {x.stock} </td>
                  <td> {x.grouping} </td>
                  <td> ${x.price} </td>
                  <td> {x.rating} </td>
                </tr>
              }
              return null;
            })
          }
        </tbody>
      </table>
    </div>
  }

};
  
export default SearchView;