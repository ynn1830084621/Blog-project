import React, { useState, useEffect } from 'react';
import '../style/components/header.css';
import { Row, Col, Menu } from 'antd';
import { Icon } from '@ant-design/compatible';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import servicePath from '../config/apiUrl';


function Header() {
    const [ navArray, setNavArray ] = useState([]);
    useEffect(() => {
        const fetchDate = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    return res.data.data;
                }
            )
            setNavArray(result);    
        }
        fetchDate()
    }, [])
    //跳转到列表页
    const navigate = useNavigate();
    const handleClick = (e) => {
        if(e.key == 0) {
            navigate('/')
        }else {
            console.log(e.key);
            navigate('/list/' + e.key)
        }
    }
    return (
        <>
        <div className='header'>
            <Row type='flex' justify='center'>
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className='header-logo'>
                    <Link to='/'>
                        js胖
                    </Link>
                    </span>
                    <span className='header-txt'>专注前端开发学习,每年100集免费视频。</span>
                </Col>
                <Col className='menu-div' xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode='horizontal' onClick={handleClick}>
                        <Menu.Item key='0'>
                            <Icon type='home' />
                                首页
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                return(
                                    <Menu.Item key={item.Id}>
                                        <Icon type={item.icon} />
                                            {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default Header