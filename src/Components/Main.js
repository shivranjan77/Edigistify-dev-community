import React, { Component } from 'react'
import fire from '../Config/Fire';
import '../App.css';


export default class Main extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            
             
        }
    }
    logout(){
        fire.auth().signOut();
    }
   
  /*  saveHandle=e=>{
        let messageRef= fire.database().ref().orderByKey().limitToLast(100);
            
            console.log(messageRef);
            alert("Data Save to Firebase Database You can check on console and expand query fetching is not done till this message");
    } */
    render() {
        return (
        
            
            <div>
              <h1 className="main"> Welcome</h1>

             
             
             
              <button onClick={this.logout}>Logout</button>
              </div>
              
            
            
            
            
        )
    }
    
}
