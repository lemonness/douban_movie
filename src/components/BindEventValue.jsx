import React from 'react'



export default class BindEvent extends React.Component{

    constructor(){
        super()
        this.state={
            msg:'??'

        }
    }

   render(){
       return <div>
           <h3>{this.state.msg}</h3>
           <button onClick={()=>this.show('??','???')}>123</button>
           <div></div>
           <input type="text" style={{width:'100%'}} value={this.state.msg} onChange={
               (e)=>this.txtChange(e)
           }></input>
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

   txtChange=(e)=>{
        const newVal =e.target.value
        this.setState(
            {
                msg:newVal
            }
        )
   }
}