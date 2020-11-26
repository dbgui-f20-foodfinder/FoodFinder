import React from 'react';
import FoodRepository from '../api/FoodsRepository.js'

export class Login extends React.Component{
    foodRepository = new FoodRepository();
  
    // save user info in session storage (similar to cart)
    render(){
      return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1> DO THE LOGIN NOW! </h1>
      </nav>
  
      </>
    }
};
  
export default Login;