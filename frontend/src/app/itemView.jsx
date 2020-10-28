import React from 'react';

export class ItemView extends React.Component{
    render(){
      return <div>
        <h1> {this.props.item.name} </h1>
      </div>
    }
  
  };
    
  export default ItemView;