import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, UserOutlined } from '@ant-design/icons';
import '../static/css/AdminIndex.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList'


const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('工作台', '1', <PieChartOutlined />),
    getItem('添加文章', '2', <DesktopOutlined />),
    getItem('文章管理', 'sub1', <UserOutlined />, [
        getItem('添加文章', 'AddArticle'),
        getItem('文章列表', 'ArticleList'),
    ]),
    getItem('留言管理', '9', <FileOutlined />),
];
function AdminIndex() {
    const [ collapsed, setCollapsed ] = useState(false)
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed)
    };
    const navigate = useNavigate()
    const handleClickArticle = ((res) => {
        if(res.key === 'AddArticle') {
            navigate('/index/add')
        } else {
            navigate('/index/list')
        }
    })
    return (
        <Layout style={{minHeight: '100vh'}} >
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu 
                    theme="dark" 
                    defaultSelectedKeys={['1']} 
                    mode="inline" 
                    onClick={handleClickArticle}
                    items={items} 
                />
            </Sider>
            <Layout className="site-layout">
            {/* <Header className="site-layout-background" style={{padding: 0}}/> */}
            <Content style={{margin: '0 16px',}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
                    <Breadcrumb.Item>工作台</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    <Routes>
                        <Route path='/' exact element={<AddArticle/>} />
                        <Route path='/add' exact element={<AddArticle/>} />
                        <Route path='/list' exact element={<ArticleList/>} />
                    </Routes>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                blog.com
            </Footer>
            </Layout>
        </Layout>
    );
}


export default AdminIndex