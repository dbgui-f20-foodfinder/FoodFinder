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
           <h2> First Name: {this.state.first} </h2>
           <h2> Last Name: {this.state.last} </h2>
           <h2> Account Credit: {this.state.accountCredit} </h2>
            <form>
            <Link className="nav-item nav-link active btn btn-primary" onClick={()=>{ this.cartService.clearCart() }}to="/login">Sign Out</Link>
          </form>
        </div>
      </>
    }
};
  
export default Profile;