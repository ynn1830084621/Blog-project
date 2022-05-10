import React, { useState, useEffect } from 'react';
// import '../style/pages/comm.css';
import '../style/pages/detailed.css';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import { Row ,Col, Breadcrumb, Affix } from 'antd';
import { Icon } from '@ant-design/compatible';
import 'markdown-navbar/dist/navbar.css';
import axios from 'axios';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import { useLocation, useParams } from 'react-router-dom';
import Tocify from '../components/tocify.tsx';
import servicePath from '../config/apiUrl';

function Detailed() {
    const params = useParams();
    //const location = useLocation();
    const [detail, setDetail] = useState({article_content:''})
    useEffect(() => {
        const fetchDate = async () => {
        const result = await axios.get(servicePath.getArticleById + params.id);
        //console.log(result.data, 'data')
        setDetail(result.data.data[0])
        };
        fetchDate();
    }, [])
    const renderer = new marked.Renderer();
    const tocify = new Tocify()
    renderer.heading = function(text, level, raw) {
        console.log(text, level)
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };

    marked.setOptions({
        renderer: renderer, 
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    }); 
    let html = marked(detail.article_content) 
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
                            <div className='detailed-context'
                                dangerouslySetInnerHTML={{__html: html}}
                            >
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                    <Affix offsetTop={5}>
                        <div className='detailed-nav comm-box'>
                            <div className='nav-title'>文章目录</div>
                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>
                </Col>
            </Row>
        </> 
    )
}

export default Detailed