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
      return <Link className="btn btn-warning float-right mt-2" to={this.state.item.id + '/edit'}> Edit </Link>  
    }
  }

    render(){
      return <>
      <Header></Header>
      <div className="">{ this.renderAlerts()}</div>
      <div className="container bg-light">
      {this.showEditButton()}
      <div className="d-inline-flex p-2">
        <div className="w-50 pr-5">
          <img className="img-thumbnail img img-responsive full-width p-3" alt="Current Product" src={this.state.item.imageURL}></img>
        </div>
        <div className="w-50 pr-5">
          <h1> {this.state.item.name} </h1>
          <h3><span className="badge text-white bg-primary">${this.state.item.price}</span></h3>
          <p className="description"> {this.state.item.description} </p>
          <br></br>
          <h3 className="pb-2"> <u> Item Info </u> </h3>
          <h5> Food Group: <span className="text-secondary"> {this.state.item.category} </span></h5>
          <h5> Aisle: <span className="text-secondary"> {this.state.item.aisle} </span></h5>
          <h5> Stock in Store: <span className="text-secondary"> {this.state.item.stock} </span></h5>
          <h5> Locally Grown: <span className="text-secondary"> {this.booleanToString(this.state.item.isLocallyGrown)} </span></h5>
          <h5> Fresh: <span className="text-secondary"> {this.booleanToString(this.state.item.isFresh)} </span></h5>
          
        </div>
      </div>
      <form className="pb-3">
            <button type="button" className="btn btn-secondary ml-1" 
            onClick={() =>{
              this.props.history.goBack();
            }}
              > Back </button>
            <button type="button" className="btn btn-primary ml-2"
            onClick={ () => this.onAddToCart() }> Add to Cart </button>
          </form>
    </div>
    </>
    }
  
  };
    
  export default ItemView;