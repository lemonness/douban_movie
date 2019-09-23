import React, { Component } from 'react';
import styles from '@/CSS/Movie_item.scss'
import { Rate } from 'antd';


class MovieItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        let url = this.props.images.small
        url=url.replace('3','1')

        return <div className={styles.box} onClick={this.goDetail}>
         <img  className={styles.img} src={url.replace('http://img1','https://images.weserv.nl/?url=img1')}></img>
        <h4>电影名称： {this.props.title}</h4>
        <h4>上映年份： {this.props.year}年</h4>
        <h4>电影类型： {this.props.genres.join(', ')}</h4>

        <Rate disabled defaultValue={this.props.rating.average/2} />
    </div>;
    }

    goDetail=()=>{
        this.props.history.push('/movie/detail/'+ this.props.id)
    }
}
 
export default MovieItems;




