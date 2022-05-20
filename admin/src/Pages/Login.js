import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import { Card, Input, Button, Space, Spin, message } from 'antd';
import { UserOutlined , KeyOutlined } from '@ant-design/icons';
import '../static/css/Login.css';
import servicePath from '../config/apiUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [ userName, setUserName ] = useState('');
    const [ password, setPassWord ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();
    const checkLogin = () => {
        setIsLoading(true);
        if (!userName) {
            message.error('用户名不能为空')
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
            return false
        } else if (!password) {
            message.error('密码不能为空')
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
            return false
        }
        const dataPorps = {
            'userName': userName,
            'password': password,
        }
        axios({
            method: 'post',
            url: servicePath.checkLogin,
            data: dataPorps,
            withCredentials: true
        }).then(
            res => {
                setIsLoading(false);
                if (res.data.data === '登录成功') {
                    localStorage.setItem('Id', res.data.open)
                    navigate('/index/')
                }
            }
        )
    }
    return (
        <div className='login-div'>
            <Spin tip='Loading...' spinning={isLoading}>
                <Card title='Blog System' bordered={true} style={{width: 400}} >
                    <Input 
                        id='userName'
                        size='large'
                        placeholder='Enter your userName'
                        prefix={<Space><UserOutlined style={{color:'rgba(0,0,0,.25)'}} /></Space>}
                        onChange={(e) => {setUserName(e.target.value)}}
                    />
                    <br/>
                    <Input.Password
                        id='password'
                        size='large'
                        type='text'
                        placeholder='Enter your password'
                        prefix={
                            <Space>
                                <KeyOutlined style={{color:'rgba(0,0,0,.25)'}} />
                            </Space>}
                        onChange={(e) => {setPassWord(e.target.value)}}
                    />
                    <br/>
                    <Button type="primary" size="large" block onClick={checkLogin} > Login in</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login
