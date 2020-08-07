import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Nav from './Nav';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import fire from './Config/Fire';
import Main from './Components/Main';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       user:"",
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user:null});
      }
    });
  }
  
  render(){
  return (
    <Router>
    <div className="App">
      <Nav/>
     {this.state.user ? (<Main />):(<HomePage />)}
     <Route path="/registration" component={Register}></Route>
     <Route path="/Signin" component={Login}></Route>
     
     
    </div>
    </Router>
  )
  }
}

export default App;
