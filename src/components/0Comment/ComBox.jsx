import React from 'react'

export default class ComBox extends React.Component {
    constructor(props) {
        super(props)

        this.state={

        }
    }

    render() {
        return <div>
            <label>评论人</label><br />
            <input type="text" ref="user"></input>
            <br />
            <label>评论内容</label><br />
            <textarea rows="5" cols="30" ref="content"></textarea>
            <input type="button" value="提交"  onClick={this.postComment}></input>
        </div>
    }

    postComment=()=>{
        var cmtInfo={user:this.refs.user.value, content:this.refs.content.value}
        var list= JSON.parse(localStorage.getItem('cmts')||'[]')
        list.unshift(cmtInfo)
        localStorage.setItem('cmts',JSON.stringify(list))
        this.refs.user.value=this.refs.content.value=''

        this.props.reload()
    }
}

