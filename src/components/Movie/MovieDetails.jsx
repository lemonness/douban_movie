import React, { Component } from 'react';
import fetchJSONP from 'fetch-jsonp'
import { Spin, Alert, Button, Icon } from 'antd';
class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            isloading: true
        }
    }

    componentDidMount() {

        fetchJSONP('http://api.douban.com/v2/movie/subject/' + this.props.match.params.id + '?apikey=0df993c66c0c636e29ecbb5344252a4a')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    info: data,
                    isloading: false
                })
            })
    }

    render() {
        return <div>
            <Button type="primary" onClick={this.goBack}>
                <Icon type="left" />
                返回电影列表
      </Button>

            {this.renderInfo()}
        </div>;
    }

    goBack = () => {
        this.props.history.go(-1)
    }

    renderInfo = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading...">
                <Alert
                    message="正在请求电影详情"
                    description="精彩内容马上呈现....."
                    type="info"
                />
            </Spin>

        } else {
            let url = this.state.info.images.large
            url = url.replace('3', '1')
            console.log(url)

            return <div>
                <div style={{ textAlign: 'center' }}>
                    <h1>{this.state.info.title}</h1>
                    <img src={url.replace('http://img1', 'https://images.weserv.nl/?url=img1') } alt="无法加载图片"></img>
                </div>
                <p  style={{textIndent:'2em',lineHeight:'30px'}}> {this.state.info.summary}</p>
            </div>
        }
    }
}

export default MovieDetails;



//http://api.douban.com/v2/movie/subject/26309788?apikey=0df993c66c0c636e29ecbb5344252a4a