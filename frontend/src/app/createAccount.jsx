import React from 'react';
import FoodRepository from '../api/FoodsRepository.js'
import { Link } from 'react-router-dom'

export class CreateAccount extends React.Component{
    foodRepository = new FoodRepository();

    state = {
      userName: "",
      password: "",
      first: "",
      last:""
    }


    createAccount(){
      this.foodRepository.createAccount(this.state.first, this.state.last, this.state.userName, this.state.password);
      this.setState({
        userName: "",
        password: "",
      });
    }

    render(){
      return <>
      
      <div className="container bg-light w-25 justify-content-center pb-3 pt-2">
      <label htmlFor="first" > First Name</label>
        <input name="first"
                id="first"
                className="form-control "
                type="text"
                value={this.state.first}
                onChange={event => this.setState({first: event.target.value })} />
        <label htmlFor="last"> Last Name</label>
        <input name="last"
              id="last"
              className="form-control"
              type="text"
              value={this.state.last}
              onChange={event => this.setState({last: event.target.value })} />
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
        <Link 
          type="button" 
          className="btn btn-secondary mt-3" 
          to="login"
          >
            Back
        </Link>
        <Link 
          type="button" 
          className="btn btn-primary mt-3 float-right" 
          onClick={event => {
            this.setState({
                first: event.target.first,
              last: event.target.last,
              userName: event.target.userName,
              password: event.target.password,
            })
            this.createAccount();
          }}
          to="login"
          >
            Create Account
          </Link>

    </div>
    </>
    }
};
  
export default CreateAccount;