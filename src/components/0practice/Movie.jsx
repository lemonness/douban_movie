import React, { Component } from 'react'

export default class Movie extends Component {
    constructor(props){
        super(props)
        this.state={
            RouteInfo:props.match.params
        }
    }
    render() {
        return (
            <div>
                {console.log(this.props.match.params.type)}
               Movie ------{this.state.RouteInfo.type}--------{this.state.RouteInfo.id}
            </div>
        )
    }
}