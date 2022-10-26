
import { Layout, Menu } from 'antd'
import React from 'react'
import { Outlet ,useNavigate } from 'react-router';

const { Header, Content, Footer } = Layout;

const BaseLayout = () => {
    const navigate = useNavigate()
    const onMenuChange = (item : any) => {
        switch (item.key) {
            case "业务" : 
            navigate('/bussiness')
            break
            case "关于" : 
            //navigate('/about')
            navigate('/about',{replace : true,state : { id : '666' }})
            break
            default :
            navigate('/')
        }
    }

    return (
        <Layout>
            <Header style={{background:'#fff', position : 'fixed',zIndex:1,width:'100%',border:0}}>
                <Menu mode="horizontal" onClick={onMenuChange}>
                    <Menu.Item key="首页">首页</Menu.Item>
                    <Menu.Item key="业务">业务</Menu.Item>
                    <Menu.Item key="关于">关于</Menu.Item>
                </Menu>
            </Header>
            <Content style={{flex : '1',background:'#fff', padding: '0 50px', marginTop: 64 }}>
                <Outlet/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>React Router Demo @2022</Footer>
        </Layout>
    )
}

export default BaseLayout