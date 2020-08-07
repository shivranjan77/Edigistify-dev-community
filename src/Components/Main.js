import React, { Component } from 'react'
import fire from '../Config/Fire';
import '../App.css';


export default class Main extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            text:""

            
             
        }
       // this.postHandler=this.postHandler.bind(this);
    }
    logout(){
        fire.auth().signOut();
    }
    post(event){
        this.setState({
            text:event.target.value
        })
    }
     
   saveHandle=e=>{
        let messageRef= fire.database().ref().orderByKey().limitToLast(100);
        fire.database().ref('post').push(this.state.text);
            console.log(messageRef);
            alert("Data Save to Firebase Database You can check on console and expand query fetching is not done till this message");
    }
    render() {
        return (
      
           <>
            <div>
              <h1 className="main"> Welcome</h1>
              
               <input type="text-area" value={this.state.text} onChange={this.post.bind(this)}></input>
           
              <button className="post" onClick={this.saveHandle} >Create Post</button><br></br>
            </div>
             
             
             <div>
              <br></br><button onClick={this.logout}>Logout</button>
              </div>
             
              
            
            
            </>
            
        )
    }
    
}
