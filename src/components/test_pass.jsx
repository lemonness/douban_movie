import React from 'react'
import ReactTypes from 'prop-types'

export default class Parent extends React.Component{
    constructor(props){
        super(props)

        this.state={
            color:'red'
        }
    
    }

    getChildContext(){
        return{
            color:this.state.color
        }
     
    }

    static childContextTypes = {
        color:ReactTypes.string
    }

    

    render(){
        return<div>
            这是父组件
            <Child></Child>
        </div>
    }
}



class Child extends React.Component{
    render(){
        return<div>
            这是子组件
            <GChild></GChild>
        </div>
    }
}

class GChild extends React.Component{

    static contextTypes={
        color:ReactTypes.string
    }

    render(){
        return<div>
           <h5 style={{color:this.context.color}}>这是孙组件-----{this.context.color}</h5>
        </div>
    }
}

