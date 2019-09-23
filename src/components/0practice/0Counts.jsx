import React from 'react'
import ReactTypes from 'prop-types'

export default class Count extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:props.initcount
        }
        
    }

  


    render(){
        console.log(this.refs.p&&this.refs.p.innerHTML)
        return <div>
            <p>这是一个Count计数器</p>
            <input type="button" value="+1" onClick={this.increament}></input>
            <hr></hr>
            <p ref="p">现在的数字是{this.state.count}</p>
        </div>
    }

    shouldComponentUpdate(){
        return true
        
    }
    componentDidUpdate(){
        console.log(this.refs.p.innerHTML)
    }


    increament=()=>{
        this.setState({
            count:this.state.count +1
        })  
    }

}

Count.defaultProps={
    initcount:0
}

Count.propTypes={
    initcount:ReactTypes.number
}