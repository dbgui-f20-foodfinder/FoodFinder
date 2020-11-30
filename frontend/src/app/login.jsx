import React from 'react';
import FoodRepository from '../api/FoodsRepository.js'
import { Link } from 'react-router-dom'

export class Login extends React.Component{
    foodRepository = new FoodRepository();

    state = {
      userName: "",
      password: "",
      errorMessage: "",
    }

    // componentWillMount(){
    //   localStorage.setItem("userCode", 0);
    // }

    checkLogIn(){
      var userName= this.state.userName;
      this.foodRepository.validateLogin(userName, this.state.password)
      .then(rez => {
        if(rez.length == 0){
          alert("Not a valid username or password. Please try again.");
        }
        else{
          this.foodRepository.getUserID(userName)
          .then(rez => {
            sessionStorage.setItem("userID", JSON.stringify(rez[0].userID));
          });
          sessionStorage.setItem("userCode", JSON.stringify(rez[0].accountTypeID));
          this.props.history.push("/map");
        }
      });
      this.setState({
        userName: "",
        password: "",
      });
    }

    // john.smith
    // password
  
    // save user info in session storage (similar to cart)
    render(){
      return <>
      
      <div className="container bg-light w-25 justify-content-center pb-3">
        <label htmlFor="userName" > Username</label>
        <input name="userName"
                id="userName"
                className="form-control "
                type="text"
                value={this.state.userName}
                onChange={event => this.setState({userName: event.target.value })} />
        <label htmlFor="password"> Password</label>
        <input name="password"
              id="password"
              className="form-control"
              type="text"
              value={this.state.password}
              onChange={event => this.setState({password: event.target.value })} />
        <button 
          type="button" 
          className="btn btn-primary mt-3" 
          onClick={event => {
            this.setState({
              userName: event.target.userName,
              password: event.target.password,
            })
            this.checkLogIn();
          }
          }>
            Login
          </button>

    </div>
    </>
    }
};
  
export default Login;