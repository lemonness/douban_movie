import React from 'react'



function Hello(props) {
    console.log(props)
    return <div>
        这是hello组件
        <br/>
        狗的名字{props.name}
        <br/>
        狗的年龄是{props.age}
        <br></br>
        狗的性别是{props.gender}
    </div>

}
export default Hello