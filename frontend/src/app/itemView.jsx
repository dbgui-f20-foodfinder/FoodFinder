import React from 'react';

export class ItemView extends React.Component{

  onAddToCart() {
    this.props.addToCart(this.props.item);
  }

    render(){
      return <div className="container bg-light">
        <h1> Item View </h1>
      <div className="d-inline-flex p-2">
        <img className="img-thumbnail img-fluid w-50 h-50 p-3" alt="Current Product" src={this.props.item.imageURL}></img>
        <div className="">
          <h1> {this.props.item.name} </h1>
          <h3><span className="badge text-white bg-primary">${this.props.item.price}</span></h3>
          <p className="description"> {this.props.item.description} </p>
          <h4> Food Group: {this.props.item.grouping} </h4>
          <h4> Aisle {this.props.item.aisle} </h4>
          <h4> Stock in Store: {this.props.item.stock} </h4>
          <form>
            <button type="button" class="btn btn-secondary" 
              > Back </button>
            <button type="button" class="btn btn-primary"
            onClick={ () => this.onAddToCart() }> Add to Cart </button>
          </form>
        </div>
      </div>
    </div>
    }
  
  };
    
  export default ItemView;