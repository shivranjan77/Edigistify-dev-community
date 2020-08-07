import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
function HomePage() {
    return (
        <Router>
        <div>
            <Link to="Signin" >
            <button>Login</button>
            </Link>
            <Link to="/registration">
            <button >Register</button>
            </Link>
            <Route exact path="/registration" component={Register}></Route>
            <Route exact path="/Signin" component={Login}></Route>
            
        </div>
       </Router>
    )
}

export default HomePage
