import React from 'react';
import FoodRepository from '../api/FoodsRepository.js'
import { Link } from 'react-router-dom'
import {CartService} from '../services/cartService'
import Header from './header';

export class Profile extends React.Component{
    foodRepository = new FoodRepository();
    cartService = new CartService();


    state={
        first:"",
        last:"",
        accountCredit:0
    }

    componentWillMount(){
        this.foodRepository.getUserInfo(sessionStorage.getItem("userID"))
        .then(rez => {
          this.setState({
            first: rez[0].firstName,
            last: rez[0].lastName,
            accountCredit: rez[0].inStoreCredit
          });
        });
      }
  
    render(){
      return <>
        <Header></Header>
       <div className="container bg-light">
            <h1> Account Info</h1>
           <h4> First Name: {this.state.first} </h4>
           <h4> Last Name: {this.state.last} </h4>
           <h4> Account Credit: {this.state.accountCredit} </h4>
           <p className="text-secondary"> * To spend your instore credits, just show us your profile page at checkout! It's that simple!</p>
           <p className="text-secondary">  To gain more in store credits, be sure to visit our kiosk when you're shopping! We're always happy to give our loyal customers a good deal every once in a while! *</p>
            <form>
            <Link className="nav-item nav-link active btn btn-primary" onClick={()=>{ this.cartService.clearCart() }}to="/login">Sign Out</Link>
          </form>
        </div>
      </>
    }
};
  
export default Profile;