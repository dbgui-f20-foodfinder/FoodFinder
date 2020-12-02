import React from 'react';
import FoodRepository from '../api/FoodsRepository.js'
import { Link } from 'react-router-dom'
import {CartService} from '../services/cartService'

export class Header extends React.Component{
    foodRepository = new FoodRepository();
    cartService = new CartService();

    state ={
      alerts: []
    }
  
    addItemToCart(item){
      var c = this.state.cart;
      c.push(item);
      this.setState({cart: c});
    }

    componentWillMount(){
      this.foodRepository.getAlertsUser(sessionStorage.getItem("userID"))
      .then(x => {
        this.foodRepository.getAllAlerts()
        .then(y =>{
          if(sessionStorage.getItem("seenGlobalNotifications") == "false"){
            this.setState({
              alerts: x.concat(y)
            })
            this.foodRepository.deleteAlerts(sessionStorage.getItem("userID"));
            sessionStorage.setItem("seenGlobalNotifications", JSON.stringify(true));
          }
          else{
            this.setState({
              alerts: x
            })
          }
        })
      })
    }

    showAlertHub(){
      if(sessionStorage.getItem("userCode") == 2){
        return <>
          <Link className="nav-item nav-link active text-white" to="/notifications"> Employees </Link>
        </>
      }
      return <>
      </>
    }

    renderAlerts(){
      return <div className="alert">
        { this.state.alerts.map((x,i) =>{
            return <div key={i} className="alert alert-info alert-dismissible show" role="alert">
              {x.notifText}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        })
        }
      </div>
    }
  
    render(){
      return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand text-white" to="/map">Map</Link>
          <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav mr-auto">
                <Link className="nav-item nav-link active text-white" to="/search" onClick={() => localStorage.setItem("userCode", 0)}>Search<span className="sr-only"></span></Link>
                <Link className="nav-item nav-link active text-white" to="/cart">Cart</Link>
                {this.showAlertHub()}
              </ul>
              <ul className="navbar-nav">
                <Link className="nav-item nav-link active text-white" to="/myProfile">Profile</Link>
                <Link className="nav-item nav-link active text-white" onClick={()=>{ 
                        sessionStorage.setItem("seenGlobalNotifications", JSON.stringify(false));
                        this.cartService.clearCart() }}
                      to="/login">Sign Out</Link>
              </ul>
          </div>
      </nav>
      <div className="alert position-fixed  w-25">{ this.renderAlerts()}</div>
      </>
    }
};
  
export default Header;