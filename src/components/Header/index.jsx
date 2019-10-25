import React from 'react';
import './index.less'
import { Input, Avatar, Popover, Button } from 'antd';

const { Search } = Input;

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );    
    return (
      <div className="header">
        <div className="left">
          <div className="logo">
            <Avatar className="logo-img" icon="read" />
            <span className="name">图书推荐系统</span>
          </div>
          
          <Search
            placeholder="输入想查找的图书名字"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
        
        <div className="user">
          <Avatar className="avatar" icon="user" />
          <Popover placement="bottom" content={content}>
            <Button type="link">Kiris.</Button>
          </Popover>
        </div>
       
      </div>
    );
  }
}

export default Header;
