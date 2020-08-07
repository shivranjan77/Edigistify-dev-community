import React, { Component } from 'react'
import fire from '../Config/Fire';


export default class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
             email:'',
             password:''
        }
        this.signin=this.signin.bind(this) 
    }
    signin(event){
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{}).catch((error)=>{
            alert(error);
                });
                
    }
    mailhandleChange(event){
        this.setState({
            email:event.target.value
        })
    }
    passhandleChange(event){
        this.setState({
            password:event.target.value
        })
    }
    
    render() {
        return (
            <form className="align">
            <div>
            <label>Email</label>
              <input type="email" name="email" value={this.state.email} onChange={this.mailhandleChange.bind(this)}></input><br></br>
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.passhandleChange.bind(this)}></input><br></br>
               <button type="submit" onClick={this.signin}>Log In</button>
            </div>
            </form>
        );
    }
}
