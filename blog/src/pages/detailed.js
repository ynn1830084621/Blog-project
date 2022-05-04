import React, { useEffect } from 'react';
import '../style/pages/comm.css';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import { Row ,Col, Breadcrumb, Affix } from 'antd';
import { Icon } from '@ant-design/compatible';
import '../style/pages/detailed.css';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import axios from 'axios';

function Detailed(props) {
    console.log(props)
    useEffect(() => {
        const fetchDate = async () => {
        const result = await axios('http://127.0.0.1:7001/default/getArticleById'+id);
        console.log(result.data, 'data')
        // setList(result.data.data)
        };
        fetchDate();
    }, [])
    let markdown='# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n'+
    '\`console.log(111)\` \n\n'+
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n'+
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '``` var a=11; ```'
    return (
        <>
            <div>
                <title>博客详情页</title>
            </div>
            <Header/>
            <Row className='comm-main' type='flex' justify='center'>
                <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className='bread-div'>
                            <Breadcrumb>
                                <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                                <Breadcrumb.Item>...</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div>
                            <div className='detailed-title'>
                                React实战视频教程-技术胖Blog开发(更新08集)
                            </div>
                            <div className='list-icon center'>
                                <span><Icon type='calendar' />2020-4-25</span>
                                <span><Icon type='video-camera' />视频教程</span>
                                <span><Icon type='eye-o' />3000</span>
                            </div>
                            <div className='detailed-context'>
                            <ReactMarkdown 
                                children={markdown}
                            />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                    <Affix offsetTop={5}>
                        <div className='detailed-nav comm-box'>
                            <div className='nav-title'><title>文章目录</title></div>
                            <MarkNav 
                                className='article-menu'
                                source={markdown}
                                ordered={false}
                            />
                        </div>
                    </Affix>
                </Col>
            </Row>
        </> 
    )
}

export default Detailed