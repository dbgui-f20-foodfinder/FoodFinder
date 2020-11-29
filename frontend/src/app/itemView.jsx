import React from 'react';
import { Food } from '../models/food';
import FoodRepository from '../api/FoodsRepository.js'
import Header from './header';

export class ItemView extends React.Component{
  foodRepository = new FoodRepository();

  state = {
    item: new Food(),
  }

  onAddToCart() {
    //this.foodRepository.addToCart(this.state.food.id);
    // this.props.addToCart(this.state.item);
  }

  booleanToString(input){
    if(input){
      return "Yes";
    }
    else{

      return "No";
    }
  }

  componentWillMount(){
    this.foodRepository.getFood(+this.props.match.params.foodID)
    .then(f => {
      this.setState({
        item: new Food(f[0].productID, f[0].name, f[0].price, f[0].numSearches, f[0].expirationDate, f[0].storeID, f[0].locationID, f[0].stock, 
          f[0].category, f[0].isFresh, f[0].isLocallyGrown, f[0].rating, f[0].imageURL, f[0].productDesc)
      });
    });
  }

    render(){
      return <>
      <Header></Header>
      <div className="container bg-light">
      <div className="d-inline-flex p-2">
        <img className="img-thumbnail img-fluid w-50 h-50 p-3" alt="Current Product" src={this.state.item.imageURL}></img>
        <div className="">
          <h1> {this.state.item.name} </h1>
          <h3><span className="badge text-white bg-primary">${this.state.item.price}</span></h3>
          <p className="description"> {this.state.item.description} </p>
          <h4> Food Group: {this.state.item.category} </h4>
          <h4> Aisle {this.state.item.aisle} </h4>
          <h4> Stock in Store: {this.state.item.stock} </h4>
          <h4> Locally Grown: {this.booleanToString(this.state.item.isLocallyGrown)} </h4>
          <h4> Fresh: {this.booleanToString(this.state.item.isFresh)} </h4>
          <form>
            <button type="button" className="btn btn-secondary" 
            onClick={() =>{
              this.props.history.goBack();
            }}
              > Back </button>
            <button type="button" className="btn btn-primary"
            onClick={ () => this.onAddToCart() }> Add to Cart </button>
          </form>
        </div>
      </div>
    </div>
    </>
    }
  
  };
    
  export default ItemView;