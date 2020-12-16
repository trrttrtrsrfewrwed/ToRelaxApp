import React, {useState} from 'react';
import Main from '../MainFrame/Main'
import SignUp from '../SignUpFrame/SignUp'
import Login from '../LoginFrame/Login'
import Activities from '../ActivitiesFrame/Activities'
import NotFound from '../NotFound'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App-module.css"
import PrivateRoute from '../PrivateRoute'
import Response from '../ResponseFrame/Response'

function App() {
    const [request, setRequest] = useState({request: ""})

    const WrappedMain = function(props) {
        return <Main {...props} setRequest = {setRequest}/>
    }
    const WrappedResponse= function(props) {
        return <Response {...props} setRequest = {setRequest} request = {request}/>
    }
    return (
        <div className = 'app'>
            <Router>
                <Switch>
                    <PrivateRoute exact path='/' component={WrappedMain} />
                    <Route exact path='/signup' component={SignUp}/>
                    <Route exact path='/login' component={Login}/>
                    <PrivateRoute exact path='/activities' component={Activities}/>
                    <PrivateRoute exact path='/response' component={WrappedResponse}/>
                    <Route component={NotFound} />
                </Switch>
            </Router> 
        </div>
    )
}

export default App