import React from 'react'
import MyItems from '@/components/MyItems'
import objcss from '@/CSS/MyList.scss'
import  'bootstrap/dist/css/bootstrap.css'


//import MyList from '@/components/MyList'    //index文件里需要写入的

export default class ComList extends React.Component{
    constructor(){
        super()
        this.state={
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
            <button className="btn btn-primary"  >这是一个按钮</button>
            <button className="btn btn-dark">这也是一个按钮</button>
            <h1 className={[objcss.title,"test"].join(' ') } > 这是一个评论列表</h1>
            {this.state.ConList.map(items=>
                <MyItems {...items}  key={items.id}></MyItems>
                )}
        </div>
    }
}