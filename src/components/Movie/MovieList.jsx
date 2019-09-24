import React, { Component } from 'react';
import { Spin, Alert, Pagination } from 'antd';
import fetchJSONP from 'fetch-jsonp'
import MovieItem from '@/components/Movie/MovieItem'





export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            nowPages: parseInt(props.match.params.page) || 1,    //当前页码值
            pageSize: 12,
            total: 0,                                  //当前电影总共有多少条数据
            isloading: true,
            movieType: props.match.params.type    //要获取电影的类型
        }
    }

    componentDidMount() {
        this.loadMovieListByTypeAndPage()

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isloading: true,
            nowPages: parseInt(nextProps.match.params.page) || 1,
            movieType: nextProps.match.params.type

        }, function () {
            this.loadMovieListByTypeAndPage()
        }
        )
    }


    

    render() {
        return <div>
            {this.renderList()}
        </div>
    }

    // 例子http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=14
    loadMovieListByTypeAndPage() {

                const start =this.state.pageSize*(this.state.nowPages-1)
                const url =`http://api.douban.com/v2/movie/${this.state.movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`
                fetchJSONP(url)
              .then(res => res.json())
              .then(
                (data) => {
                 this.setState({
                     isloading:false,
                     movies:data.subjects,
                     total:data.total

                 })
                }
              )


        // const data = require('@/testdata/' + this.state.movieType + '.json')
        // setTimeout(() => {
        //     this.setState({
        //         isloading: false,
        //         movies: data.subjects,
        //         total: data.total
        //     })
        // }, 1000);
    }


   

    renderList = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading...">
                <Alert
                    message="正在请求电影列表"
                    description="精彩内容马上呈现....."
                    type="info"
                />
            </Spin>
            
        } else {
            return <div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.state.movies.map(item => {
                        return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
                    }
                    )}
                </div>

                <Pagination defaultCurrent={this.state.nowPages}  pageSize={this.state.pageSize}
                total={this.state.total} onChange={this.pageChanged} />
            </div>
        }
    }

    pageChanged=(page)=>{
        // window.location.href='/#/movie/'+this.state.movieType +'/'+ page

        //使用react-route-dom编程式导航
        this.props.history.push('/movie/'+this.state.movieType +'/'+ page)
    }
}
