import React from 'react';
import SideMenu from '../../components/SideMenu';
import BookList from '../../components/BookList';
import { Carousel, Card } from  'antd';
import './index.less';

class Index extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <div className="main-content">
          <SideMenu className="side-menu"></SideMenu>
          <Carousel className="carousel" autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
          <Card className="note" title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <BookList className="book-list"></BookList>
      </div>
    );
  }
}

export default Index;
