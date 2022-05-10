import React, { useState, useEffect } from 'react';
import { Row , Col, List } from 'antd';
import { Icon } from '@ant-design/compatible';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import servicePath from '../config/apiUrl';



function Home() {
    const [mylist, setList] = useState([]);
    useEffect(() => {
    const fetchDate = async () => {
      const result = await axios(servicePath.getArticleList);
      console.log(result.data, 'data')
      setList(result.data.data)
    };
    fetchDate();
  }, [])

  return (
    <>
        <div>
            <title>Home</title>
        </div>
        <Header/>
        <Row className='comm-main' type='flex' justify='center'>
            <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
            <div>
                <List 
                header={<div>最新日志</div>}
                itemLayout='vertical'
                dataSource={mylist}
                renderItem={item => (
                    <List.Item>
                    <div className='list-title'>
                        <Link to={'/detailed/'+item.id}>
                            {item.title}
                        </Link>
                    </div>
                    <div className='list-icon'>
                      <span><Icon type="calendar" />{item.addTime}</span>
                      <span><Icon type="video-camera" />{item.typeName}</span>
                      <span><Icon type="eye-o" />{item.view_count}</span>
                    </div>
                    <div className='list-context'>{item.introduce}</div>
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author/>
            <Advert/>
          </Col>
        </Row>
        <Footer/>
    </> 
  )
}
export default Home
