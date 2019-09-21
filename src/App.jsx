import React from 'react'
import About from "@/components/About";
import Movie from "@/components/Movie";
import Home from "@/components/Home";
import {DatePicker} from "antd";
import {HashRouter,Route,Link} from 'react-router-dom'

export default class App extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return<HashRouter> 
            <div>
                <h1>这是网站的根组件</h1>
                <DatePicker/>
                <hr/>
                <Link to='/home'>首页</Link>&nbsp;&nbsp;
                <Link to='/movie/top250/10'>电影</Link>&nbsp;&nbsp;
                <Link to='/about'>关于</Link>&nbsp;&nbsp;


                <hr/>
                <Route path="/home" component={Home}></Route>
                <Route path="/movie/:type/:id" component={Movie} exact></Route>
                <Route path="/about" component={About} exact></Route>
            </div>
        </HashRouter>


          
       
    }
}