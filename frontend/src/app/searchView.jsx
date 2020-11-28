import React from 'react';
import { Food } from '../models/food';
import FoodRepository from '../api/FoodsRepository.js'
import { Link } from 'react-router-dom'
import Header from './header';

export class SearchView extends React.Component{
  foodRepository = new FoodRepository();

  state = { 
        search: "",
        foods: [],
        sort: "ID"
  }; 

  componentWillMount(){
    this.foodRepository.getFoods()
    .then(rez => {
      let foods = [];
      rez.map((f) => {
          let curFood = new Food(f.productID, f.name, f.price, f.numSearches, f.expirationDate, f.storeID, f.locationID, f.stock, f.category, f.isFresh, 
            f.isLocallyGrown, f.rating, f.imageURL, f.productDesc);
          foods.push(curFood);
      });
      this.setState({
        foods: foods
      });
      this.sortItems("id");
    });
  }

  sortItems(field){
    switch(field){
      case "id":
        this.state.foods.sort((a, b) => (a["id"] > b["id"]) ? 1 : -1);
        break;
      case "name":
        this.state.foods.sort((a, b) => (a["name"] > b["name"]) ? 1 : -1);
        break;
      case "aisle":
        this.state.foods.sort((a, b) => (a["aisle"] > b["aisle"]) ? 1 : -1);
        break;
      case "stock":
        this.state.foods.sort((a, b) => (a["stock"] > b["stock"]) ? 1 : -1);
        break; 
      case "category":
        this.state.foods.sort((a, b) => (a["category"] > b["category"]) ? 1 : -1);
        break; 
      case "price":
        this.state.foods.sort((a, b) => (a["price"] > b["price"]) ? 1 : -1);
        break;
      case "rating":
        this.state.foods.sort((a, b) => (a["rating"] > b["rating"]) ? 1 : -1);
        break;
    }
  }

  render(){
    return <>
    <Header></Header>
    <div className="container bg-light">
      <label htmlFor="searchBar"> Search</label>
      <input name="searchBar"
              id="searchBar"
              className="form-control"
              type="text"
              value={this.state.search}
              onChange={event => this.setState({search: event.target.value })} />
      <label htmlFor="sort"> Sort by </label>
      <select
              name="sort"
              id="sort"
              className="form-control"
              value={this.state.sort}
              onChange={event => {
                this.setState({sort: event.target.value});
                this.sortItems(event.target.value);
              }}>
              <option value="id">ID</option>
              <option value="name">Name</option>
              <option value="aisle">Aisle #</option>
              <option value="stock">Stock</option>
              <option value="category">Food Group</option>
              <option value="price">Cost</option>
              <option value="rating">Rating</option>
          </select>
      <table className="table">
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
            this.state.foods.length != 0 && this.state.foods.map(x => {
              if(x.name.toLowerCase().includes(this.state.search.toLowerCase()) || this.state.search === ""){
                return <tr  key={x.id}>
                  <td> {x.id} </td>
                  <td> <Link className="text-decoration-underline" to={'foods/' + x.id}> <u>{x.name}</u> </Link></td>
                  <td> {x.aisle} </td>
                  <td> {x.stock} </td>
                  <td> {x.category} </td>
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
    </>
  }

};
  
export default SearchView;