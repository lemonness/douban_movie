//#region 介绍react中绑定事件的标准格式
import React from 'react'



export default class BindEvent extends React.Component{

    constructor(){
        super()
        this.state={
            msg:'哈哈'
        }
    }

   render(){
       return <div>
           <h3>{this.state.msg}</h3>
           <button onClick={()=>this.show('🐷','❄')}> 这是一个按钮</button>
       </div>
   }
   show=(arg1,arg2)=>{
        this.setState(
            {
                msg:'1234'+arg1+arg2
            },
            function(){
                console.log(this.state.msg)
            }
        )
   }
}
//#endregion 

