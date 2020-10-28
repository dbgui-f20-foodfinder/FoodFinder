import React from 'react';
import {Food} from '../models/food';


export class SearchView extends React.Component{
  state = { 
        search: "",
        foods: this.props.foods,
        sort: ""
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
      <select
              name="sort"
              id="sort"
              className="form-control"
              value={this.state.sort}
              onChange={event => this.setState({ sort: event.target.value })}>
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