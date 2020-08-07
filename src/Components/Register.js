import React, { Component } from 'react'
import '../App.css';
import fire from '../Config/Fire';

export default class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
             name:'',
             emailId:'',
             Password:''
        }
        this.signup=this.signup.bind(this)
    }
    signup(event){
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.emailId,this.state.Password).then((u)=>{}).catch((error)=>{
            alert(error);
                });
                
    }
     nameHandle(event){
        this.setState({
            name:event.target.value
        })
    }
   
    emailHandle(event){
        this.setState({
            emailId:event.target.value
        })
    }
   
    PasswordHandle(event){
        this.setState({
            Password:event.target.value
        })
    }
    

    render() {
        return (
            
            <form className="align" >
            <div> 
             <label>Name</label>
              <input type="text" name="Name" value={this.state.name} onChange={this.nameHandle.bind(this)}></input> <br></br>
              <label>Email</label>
              <input type="email" name="email" value={this.state.emailId} onChange={this.emailHandle.bind(this)}></input><br></br>
              <label>Password</label>
              <input type="password" name="Password" value={this.state.Password} onChange={this.PasswordHandle.bind(this)}></input><br></br>
              <button type="submit" onClick={this.signup}>Signup</button>
            </div>
            </form>
        )
    }
}
