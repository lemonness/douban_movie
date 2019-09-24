import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Content, Sider } = Layout;
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'
import { Route, Link, Switch } from 'react-router-dom'

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <Layout style={{ height: '100%' }}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[window.location.hash.split('/')[2]?window.location.hash.split('/')[2]:"in_theaters"]}
                    style={{ height: '100%', borderRight: 0 }}
                >

                    <Menu.Item key="in_theaters">
                        <Link to="/movie/in_theaters/1">正在热映</Link>
                    </Menu.Item>
                    <Menu.Item key="coming_soon">
                        <Link to='/movie/coming_soon/1'>即将上映</Link>
                    </Menu.Item>
                    <Menu.Item key="top250">
                        <Link to='/movie/top250/1'>Top250</Link>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout style={{ paddingLeft: '1px', height: '100%' }}>
                <Content
                    style={{
                        background: '#fff',
                        padding: 10,
                        margin: 0,
                        height: '100%'
                    }}
                >
                    <Switch>
                    <Route path='/movie/detail/:id' component={MovieDetails} default></Route>
                    <Route path='/movie/:type/:page' component={MovieList}></Route>
                    </Switch>
                    

                </Content>
            </Layout>
        </Layout >
    }
}
