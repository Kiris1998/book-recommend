import React from 'react';
import BookList from '../../components/BookList';
import './index.less';

class Index extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <div className="now-book">
          <div className="title">正在借阅</div>
          <BookList className="book-list"></BookList>
        </div>
        <div className="history-book">
          <div className="title">历史借阅</div>
          <BookList className="book-list"></BookList>
        </div>
      </div>
    );
  }
}

export default Index;
