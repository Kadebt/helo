import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import DashBoard from './Components/DashBoard'
import Auth from './Components/Auth'
import Post from './Components/Post'
import Form from './Components/Form'



export default <Switch>
    <Route exact path="/" component={Auth}/>
    <Route path='/dashboard' component={DashBoard}/>
    <Route path='/post/:postid' component={Post}/>
    <Route path='/new' component={Form}/>
</Switch>