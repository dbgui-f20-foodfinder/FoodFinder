import React from 'react';
import FoodRepository from '../api/FoodsRepository.js'
import { Link } from 'react-router-dom'

export class AlertHub extends React.Component{
    foodRepository = new FoodRepository();

    state ={
      alert: "",
      sendAll: false,
      id: ""
    }

    sendAlert(){
      if(sendAll){
          this.foodRepository.sendAlertAll(this.state.alert);
      }
      else{
          this.foodRepository.sendAlert(this.state.id, this.state.alert);
      }
    }
  
    render(){
      return <>
      
      <div className="container bg-light w-50 pb-3 pt-2">
        <label htmlFor="alert" > Alert</label>
        <input name="alert"
                id="alert"
                className="form-control"
                type="text"
                value={this.state.alert}
                onChange={event => this.setState({alert: event.target.value })} />
        <label htmlFor="userID" > User ID</label>
        <input name="userID"
                id="userID"
                className="form-control"
                type="text"
                value={this.state.userID}
                onChange={event => this.setState({userID: event.target.value })} />
        <label htmlFor="sendAll"> Send to All</label>
        <input name="sendAll"
                id="sendAll"
                className="form-control"
                type="checkbox"
                checked={this.state.sendAll}
                onChange={event => this.setState({sendAll: event.target.checked })} 
                />
        <form className="pb-3">
            <button type="button" className="btn btn-secondary ml-1" 
            onClick={() =>{
              this.props.history.goBack();
            }}
              > Back </button>
            <button type="button" className="btn btn-primary ml-2"
            onClick={ () => this.sendAlert() }> Send Notification </button>
          </form>
    </div>
    </>
    }
};
  
export default AlertHub;