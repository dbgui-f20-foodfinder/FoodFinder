import React from 'react';
import FoodRepository from '../api/FoodsRepository.js'
import { Link } from 'react-router-dom'
import Header from './header.jsx';

export class EmployeePage extends React.Component{
    foodRepository = new FoodRepository();

    state ={
        alerts:[],
      alert: "",
      sendAll: false,
      id: "",
      credit: 0
    }

    onAlertSent() {    
        var newAlerts = this.state.alerts;
        newAlerts.push(0);
        this.setState({
          alert: "",
          id: ""
        })
        setTimeout(()=>{
          newAlerts.pop();
          this.setState({
            alerts: newAlerts
          })
        }, 2000);
      }

    sendAlert(){
       this.onAlertSent();
      if(this.state.sendAll){
          this.foodRepository.sendAlertAll(this.state.alert);
      }
      else{
          this.foodRepository.sendAlert(this.state.id, this.state.alert);
      }
    }

    sendCredit(){
    this.onSendCredit();
     if(this.state.sendAll){
      this.foodRepository.sendCreditAll(this.state.credit);
     }
     else{
      this.foodRepository.sendCredit(this.state.id, this.state.credit);
     }
   }

    onSendCredit() {    
      var newAlerts = this.state.alerts;
      newAlerts.push(0);
      this.setState({
        credit: 0,
        id: ""
      })
      setTimeout(()=>{
        newAlerts.pop();
        this.setState({
          alerts: newAlerts
        })
      }, 2000);
    }

    actionCompleted(){
        return <div className="float-right pr-5 alert">
          { this.state.alerts.map((x,i) =>{
              return <div key={i} className="alert alert-success alert-dismissible fade show" role="alert">
                Action Completed!
            </div>
          })
          }
        </div>
      }
  
    render(){
      return <>
      <Header></Header>
      <div> {this.actionCompleted()} </div>
      <div className="container bg-light w-75 pb-3 pt-2">
        <label htmlFor="userID" > User ID</label>
        <input name="userID"
                id="userID"
                className="form-control"
                type="text"
                disabled={this.state.sendAll}
                value={this.state.id}
                onChange={event => this.setState({id: event.target.value })} />
        <label className="pt-2" htmlFor="sendAll"> Send to All</label>
        <input name="sendAll"
                id="sendAll"
                className="form-control"
                type="checkbox"
                checked={this.state.sendAll}
                onChange={event => this.setState({sendAll: event.target.checked })} 
                />
        <div className="d-inline-flex w-100">
          <div className="w-50">
          <label htmlFor="alert" > Notification</label>
            <input name="alert"
                    id="alert"
                    className="form-control"
                    type="text"
                    value={this.state.alert}
                    onChange={event => this.setState({alert: event.target.value })} />
          </div>
          <div className="w-50">
          <label htmlFor="credit" > Credit</label>
            <input name="credit"
                    id="credit"
                    className="form-control"
                    type="text"
                    value={this.state.credit}
                    onChange={event => this.setState({credit: event.target.value })} />
          </div>
        </div>
        <form className="pb-3 ">
            <button type="button" className="btn btn-secondary ml-1 mt-4" 
            onClick={() =>{
              this.props.history.goBack();
            }}
              > Back </button>
            <button type="button" className="btn btn-primary ml-2 mt-4"
            onClick={ () => this.sendAlert() }> Send Notification </button>
            <button type="button" className="btn btn-primary ml-2 mt-4"
            onClick={ () => this.sendCredit() }> Send Credit </button>
          </form>
    </div>

    </>
    }
};
  
export default EmployeePage;