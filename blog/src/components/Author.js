import { Avatar, Divider } from 'antd';
import '../style/components/author.css'

function Author() {
    return (
        <div className='author-div comm-box'>
            <div><Avatar size={100} src='http://img.duoziwang.com/2021/06/q101801413228587.jpg' /></div>
            <div className='author-introduction'>
                个人博客,专注于WEB和移动前端开发
                <Divider>社交账号</Divider>
                <Avatar size={28} icon='github' className='account' />
                <Avatar size={28} icon='qq' className='account' />
                <Avatar size={28} icon='wechat' className='account' />
            </div>
        </div>
    )
}

export default Author
