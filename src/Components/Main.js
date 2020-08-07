import React, { Component } from 'react'
import fire from '../Config/Fire';
import '../App.css';


export default class Main extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            title:'',
            Description:'',
            items:[]     
        }  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = fire.database().ref('items');
    const item = {
      title1: this.state.title,
      Description1: this.state.Description
    }
    itemsRef.push(item);
    this.setState({
      title1: '',
      Description1: ''
    });
  }
  componentDidMount() {
    const itemsRef = fire.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title1: items[item].title1,
          Description1: items[item].Description1
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = fire.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  
  
    logout(){
        fire.auth().signOut();
    } 
    render() {
       
        return (
      
           <>
            <div className="app">
              <h1 className="main"> Welcome</h1>
              
            </div>
             
             
             <div>
              <br></br><button onClick={this.logout}>Logout</button>
              </div>
              <div className='container'>
              <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="title" placeholder="Title" onChange={this.handleChange} value={this.state.title} />
                  <input type="text" name="Description" placeholder="Description" onChange={this.handleChange} value={this.state.Description} /><br></br>
                  <button>Create New Post</button>
                </form>
          </section>
          <section className='display-item'>
              <div className="wrapper">
              <h2>All Posts</h2>
                <ul>
                  {this.state.items.map((item) => {
                    return ( 
                        <div className="card">
                         
                        <h3>Title- {item.title1}</h3>
                        <p>{item.Description1}
                        <br></br>
                          <button onClick={() => this.removeItem(item.id)}>Remove Post</button>
                          
                        </p>
                      
                      </div> 
                    )
                  })}
                  
                </ul>
              </div>
          </section>
        </div>
        </>
      
    );
             
              
            
            
           
            
        
    }
    
}
