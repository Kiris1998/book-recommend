import React from 'react';
import { Menu } from 'antd';
import './index.less';

class SideMenu extends React.Component {
  constructor() {
    super();
  }
  render() {   
    return (
      <div>
        <p>图书分类/</p>
        <Menu style={{ width: 256 }}>
        <Menu.Item key="1">
          科幻 >
        </Menu.Item>
        <Menu.Item key="2">
          悬疑 >
        </Menu.Item>
        <Menu.Item key="3">
          教育 >
        </Menu.Item>
        <Menu.Item key="4">
          童话 >
        </Menu.Item>
        <Menu.Item key="4">
          网游 >
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default SideMenu;
