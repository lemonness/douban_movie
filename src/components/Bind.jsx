import React from 'react'

export default class Bind extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'hello world'
        }
    }
    render() {
        return <div>
            <h1>这是一个组件------{this.state.msg}</h1>
            <input type="button" value="改变值的按钮" onClick={this.changeMsg}></input>  {/*更改为箭头函数后可以写成 ()=>this.changeMsg()  否则直接写 this.changeMsg*/}
        </div>
    }

    changeMsg=()=>{
        console.log(this)
        this.setState({
            msg: '更改后的值' 
        })

    }
}