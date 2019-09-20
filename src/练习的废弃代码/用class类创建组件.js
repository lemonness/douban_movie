

class Movie extends React.Component{

    constructor(){
        super()
        this.state={
            msg:'我是class创建出来的组件'
        }
    }
    render(){
        return <h1>
            这是一个movie组件  {this.state.msg }
            <hr/>
             姓名---{this.props.name}  年龄---{this.props.age}  性别---{this.props.gender}
            </h1>
    }
}

const zs ={
    name:'张三',
    age:'18',
    gender:'male'
}

ReactDOM.render(
    <div>
         <Movie {...zs}></Movie>
         <hr/>
         <Movie/>
    </div>
   
    ,document.getElementById('app')
)
