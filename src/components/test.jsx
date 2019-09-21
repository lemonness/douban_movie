import React from 'react'

export default class Father extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: '这是父组件的信息'
        }
    }

    render() {
        return<div>
            <h1 >这是父组件</h1>
            <input type="button" value="改变pmsg值" onClick={()=>this.changeMsg()} ></input>
            <hr></hr>
            <Son  pmsg={this.state.msg}></Son>
        </div>
    }

    changeMsg=()=>{
        this.setState({
            msg:'我是父组件改变后的消息'
        })
    }
}

class Son extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return<div ref="h1">
            这是子组件 ------{this.props.pmsg}

        </div>

    }

    componentWillReceiveProps(){
        console.log('被触发了')
        console.log(this.refs.h1.innerHTML)
    }
}