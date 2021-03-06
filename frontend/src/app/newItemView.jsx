import React from 'react';
import { Food } from '../models/food';
import FoodRepository from '../api/FoodsRepository.js'
import Header from './header';
import { Link } from 'react-router-dom'

export class NewItemView extends React.Component{
  foodRepository = new FoodRepository();

  state = {
    id: '',
    name: '',
    price: '',
    numSearches: '',
    exprDate: '',
    storeID: '',
    location: '',
    stock: '',
    category: '',
    isFresh: false,
    locallyGrown: false,
    rating:  '',
    imageURL: 'https://placehold.it/250x250',
    desc: '',
  }

  saveChanges(){
    var state = this.state;
    var item = new Food(state.id, state.name, state.price, state.numSearches, state.exprDate, state.storeID, state.location, state.stock,
        state.category, state.isFresh, state.locallyGrown, state.rating, state.imageURL, state.desc);
    this.foodRepository.createFood(item);
    setTimeout(()=>{
        this.props.history.goBack();
      }, 200)
  }
  
  render(){
        return <>
        <Header></Header>
        <div className="container bg-light pt-3 w-100">
        <div className="d-inline-flex p-2 w-100">
          <div className="w-50 pr-5">
          <img className="img-thumbnail img img-responsive full-width p-3" alt="Current Product" src={this.state.imageURL}></img>
            <br></br>
            <label htmlFor="imageURL" className="pt-1"> Image URL</label>
            <input name="imageURL"
                    id="imageURL"
                    className="form-control w-100"
                    type="text"
                    value={this.state.imageURL}
                    onChange={event => this.setState({imageURL: event.target.value })} />
          </div>
          <div className="w-50 pr-5">
          <label htmlFor="name"> Name</label>
          <input name="name"
                  id="name"
                  className="form-control"
                  type="text"
                  value={this.state.name}
                  onChange={event => this.setState({name: event.target.value })} />
          <label htmlFor="price"> Price</label>
          <input name="price"
                  id="price"
                  className="form-control"
                  type="text"
                  value={this.state.price}
                  onChange={event => this.setState({price: event.target.value })} />
          <label htmlFor="desc"> Description</label>
          <textarea name="desc"
                  id="desc"
                  className="form-control"
                  type="textarea"
                  value={this.state.desc}
                  onChange={event => this.setState({desc: event.target.value })} />
          <label htmlFor="category"> Food Group </label>
          <input name="category"
                  id="category"
                  className="form-control"
                  type="text"
                  value={this.state.category}
                  onChange={event => this.setState({category: event.target.value })} />
          <label htmlFor="aisle"> Aisle</label>
          <input name="aisle"
                  id="aisle"
                  className="form-control"
                  type="text"
                  value={this.state.location}
                  onChange={event => this.setState({location: event.target.value })} />
          <label htmlFor="stock"> Stock</label>
          <input name="stock"
                  id="stock"
                  className="form-control"
                  type="text"
                  value={this.state.stock}
                  onChange={event => this.setState({stock: event.target.value })} />
          <label htmlFor="locallyGrown"> Locally Grown </label>
          <input name="locallyGrown"
                  id="locallyGrown"
                  className="form-control"
                  type="checkbox"
                  checked={this.state.locallyGrown}
                  onChange={event => this.setState({locallyGrown: event.target.checked })} 
                  />
          <label htmlFor="isFresh"> Fresh</label>
          <input name="isFresh"
                  id="isFresh"
                  className="form-control"
                  type="checkbox"
                  checked={this.state.isFresh}
                  onChange={event => this.setState({isFresh: event.target.checked })} 
                  />
          <label htmlFor="exprDate"> Expiration Date <span className="text text-secondary"> (format: yyyy-mm-dd) </span></label>
          <input name="exprDate"
                  id="exprDate"
                  className="form-control"
                  type="text"
                  value={this.state.exprDate}
                  onChange={event => this.setState({exprDate: event.target.value })} />
          </div>
        </div>
        <form className="pb-3">
              <button type="button" className="btn btn-secondary ml-1" 
              onClick={() =>{
                this.props.history.goBack();
              }}
                > Cancel </button>
              <button type="button" className="btn btn-primary ml-2"
              onClick={ () => this.saveChanges() }> <Link className="" to={'foods/' + this.state.id}> </Link> Add Item </button>
            </form>
      </div>
      </>
      }
  
  };
    
  export default NewItemView;