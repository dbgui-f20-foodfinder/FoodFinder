import React from 'react';
import { Food } from '../models/food';
import FoodRepository from '../api/FoodsRepository.js'
import Header from './header';
import CartService from '../services/cartService'
import { Link } from 'react-router-dom'


export class ItemView extends React.Component{
  foodRepository = new FoodRepository();
  cartService = new CartService();

  state = {
    item: new Food(),
    alerts: []
  }

  onAddToCart() {
    this.cartService.addToCart(this.state.item);

    var newAlerts = this.state.alerts;
    newAlerts.push(0);
    this.setState({
      alerts: newAlerts
    })
    setTimeout(()=>{
      newAlerts.pop();
      this.setState({
        alerts: newAlerts
      })
    }, 2000);
  }

  booleanToString(input){

    if(input){
      console.log(input, "YES")
      return "Yes";
    }
    else{
      console.log(input, "NO")

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

  renderAlerts(){
    return <div className="float-right">
      { this.state.alerts.map((x,i) =>{
          return <div key={i} className="alert alert-success alert-dismissible fade show" role="alert">
            Item added to cart!
        </div>
      })
      }
    </div>
  }

  showEditButton(){
    if(sessionStorage.getItem("userCode") == 2){
      return <Link className="btn btn-warning" to={this.state.item.id + '/edit'}> Edit </Link>  
    }
  }

    render(){
      return <>
      <Header></Header>
      { this.renderAlerts()}
      <div className="container bg-light">
      {this.showEditButton()}
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