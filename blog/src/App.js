import React, { useState, useEffect } from 'react';
import './App.css';
//import 'antd/dist/antd.css';
import { Row , Col, List } from 'antd';
import { Icon } from '@ant-design/compatible';
import './style/pages/comm.css';
import './style/pages/index.css'
import Header from './components/Header';
import Author from './components/Author';
import Advert from './components/Advert';
import Footer from './components/Footer';
import axios from 'axios'



function Home() {
  const [mylist, setList] = useState([]);

  useEffect(() => {
    console.log((new Date()).valueOf(), '2222')
    const fetchDate = async () => {
      // setIsLoading(ture);
      var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
      };
      const result = await axios.get(
        'http://127.0.0.1:7001/default/getArticleList', config
      );
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
                    <div className='list-title'>{item.title}</div>
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
