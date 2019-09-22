import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

export default class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <HashRouter>
            <Layout className="layout" style={{height:'100%'}}>
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">首页</Menu.Item>
                        <Menu.Item key="2">电影</Menu.Item>
                        <Menu.Item key="3">关于</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' ,height:'100%'}} >
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 ,height:'100%'}}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>YouY项目</Footer>
            </Layout>
          
        </HashRouter>




    }
}