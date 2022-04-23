import React from 'react';
import './App.css';
// import 'antd/dist/antd.css';
import Header from './components/Header';
import { Row ,Col } from 'antd';
import './style/pages/comm.css';


function Home() {
  return (
    <>
        <div>
            <title>Home</title>
        </div>
        <Header/>
        <Row className='comm-main' type='flex' justify='center'>
          <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
            左侧
          </Col>
          <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
            右侧
          </Col>
        </Row>

    </> 
  )
}

export default Home
