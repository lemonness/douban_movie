import React from 'react'
import MyItems from '@/components/Comment/MyItems'
import ComBox from '@/components/Comment/ComBox'
import objcss from '@/CSS/MyList.scss'
import  'bootstrap/dist/css/bootstrap.css'




//import MyList from '@/components/MyList'    //index文件里需要写入的

export default class ComList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ConList: [{
                id: 1,
                user: '张三',
                content: '真好7'
            },
            {
                id: 2,
                user: '李四',
                content: '真好5'
            },
            {
                id: 3,
                user: '王五',
                content: '真好3'
            },
            {
                id: 4,
                user: '赵六',
                content: '真好2'
            }
        ]
        }
    }

    componentWillMount(){
        this.loadCmts()
    }
    render(){
        return <div>
            <ComBox reload={this.loadCmts}></ComBox>
            <h1 className={[objcss.title,"test"].join(' ') } > 这是一个评论列表</h1>
            {this.state.ConList.map(items=>
                <MyItems {...items}  key={items.id}></MyItems>
                )}
        </div>
    }

    loadCmts=()=>{
        var list=JSON.parse(localStorage.getItem('cmts')||'[]')
        this.setState({
            ConList:list
        })
    }
}