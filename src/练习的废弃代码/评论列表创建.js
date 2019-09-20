import React from 'react'
import ReactDOM from 'react-dom'


function MyItems(props) {
  
        return <div >
        <h2>评论人：{props.user}</h2>
        <p>内容:{props.cont}</p>
    </div>

        
       
}

class Contents extends React.Component {
    constructor() {
        super()
        this.state = {
            ConList: [{
                    id: 1,
                    user: '张三',
                    cont: '真好7'
                },
                {
                    id: 2,
                    user: '李四',
                    cont: '真好5'
                },
                {
                    id: 3,
                    user: '王五',
                    cont: '真好3'
                },
                {
                    id: 4,
                    user: '赵六',
                    cont: '真好2'
                }
            ]

        }
    }
    render(){
      
        return <div>
            <h1>这是一个评论列表</h1>
            {this.state.ConList.map(items=><MyItems {...items} key={items.id} ></MyItems>

        )}
        </div>
            
        
    }
}

ReactDOM.render(
  
        <Contents ></Contents>

    ,document.getElementById('app')
)