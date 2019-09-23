import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import styles from '@/CSS/App.scss'
import About from '@/components/About/AboutContainer'
import Home from '@/components/Home/HomeContainer'
import Movie from '@/components/Movie/MovieContainer'


export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

 
    render() {
        return <HashRouter>
            <Layout className="layout" style={{height:'100%'}}>
                <Header>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home">
                        <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                        <Link to="/movie">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                        <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 40px' ,flex:1 , background: '#fff'}} >
                 
                        <Route path='/home' component={Home}></Route>
                        <Route path='/movie' component={Movie}></Route>
                        <Route path='/about' component={About}></Route>

                </Content>
                <Footer style={{ textAlign: 'center' }}>YouY项目</Footer>
            </Layout>
          
        </HashRouter>




    }
}