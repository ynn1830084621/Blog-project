import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Input, Button, Space, Spin } from 'antd';
import { UserOutlined , KeyOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import '../static/css/Login.css';


function Login() {
    const [ userName, setUserName ] = useState('');
    const [ passWord, setPassWord ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    
    const checkLogin = () => {
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false)
        },1000)
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
                    <Input 
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
