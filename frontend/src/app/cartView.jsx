import React from 'react';

export class CartView extends React.Component{
    state = {
      price: 0,
      quantities: [],
      items: []
    }
    
    componentWillMount(){
      this.getPrice();
      this.getQuantities();
    }

    getPrice(){
      var totPrice = this.state.price;
      this.props.cart.map(x =>{
        totPrice += parseFloat(x.price);
      });
      this.setState({price: totPrice});
    }

    getQuantities(){
      var quant = [];
      this.props.cart.map(x =>{
        if(this.props.cart.includes(x.id)){
            // Need to implement
        }
      });
      this.setState({quantities: quant});
    }

    render(){
      return <div className="container bg-light">
        <h1> Cart View</h1>
        { this.props.cart.map(x => {
            return <div key={x.id} className="container bg-light">
              <div className="d-inline-flex p-2">
                <img className="img-thumbnail img-fluid w-25 p-10" alt="Current Product" src={x.imageURL}></img>
                <div className="">
                  <h1> {x.name} </h1>
                  <h3 className="text-white bg-primary badge"> ${x.price} </h3>
                  <p className="description"> {x.description} </p>
                </div>
              </div>
            </div>
          })
        }
        <button> Search More Items</button>
        <h2> {this.state.price} </h2>
      </div>
    }
  
  };
    
  export default CartView;