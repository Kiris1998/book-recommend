import React from 'react';
import { withRouter } from 'react-router-dom';
import { Tag, Button, Popover } from 'antd';
import Fave from '../../components/Fave';
import './index.less';

const bookInfo = {
  bookID: 123,
  bookName: '解忧杂货铺',
  bookImageURL: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=8b194727aa44ad342ebf8081e8996bc9/4afbfbedab64034f62ca27cca4c379310b551df0.jpg',
  bookPublishInfo: '巴拉啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
  bookAuthor: '东野圭吾',
  bookSummary: '《解忧杂货店》是日本作家东野圭吾写作的长篇小说。2011年于《小说野性时代》连载，于2012年3月由角川书店发行单行本。',
  bookTags: [
    '东野圭吾',
    '长篇小说',
  ],
  bookNum: 2,
}
const recommendBooks = [
  {
    bookName: '白夜行',
    author: '东野圭吾',
    bookId: 123123,
  },
  {
    bookName: '时生',
    author: '东野圭吾',
    bookId: 34234
  }
]
class Detail extends React.Component {
  constructor() {
    super()
    this.state = {
      fave: false,
    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  handleClick = () => {
    this.setState((preState) => {
      return {
        fave: !preState.fave
      };
    });
  }
  render() {
    const {
      bookID,
      bookName,
      bookImageURL,
      bookPublishInfo,
      bookAuthor,
      bookSummary,
      bookTags,
      bookNum         
    } = bookInfo;
    const likeOperation = (
      <div className="like">
        <span className="like-title">评价一下：</span>
        <span className="fave-container" 
             onClick={this.handleClick}>
          <Fave size={50} fave={this.state.fave}/>
        </span>
      </div>
    );
    return (
      <div className="wrap">
        <div className="detail">
          <div className="book-info">
            <div className="book-name">{bookName}</div>
            <div className="main-area">
              <Popover visible placement="bottomLeft" content={likeOperation}>
                <img className="book-img" src={bookImageURL} alt={bookName}/>
              </Popover>
              <div className="info">
                <div>
                  <span className="author-title">作者：</span>
                  <span className="author">{bookAuthor}</span>
                </div>
                <div>
                  <span className="tag-title">标签：</span>
                  <span className="tag">{
                    bookTags.map(tag => (
                      <Tag key={tag} color="#108ee9">{tag}</Tag>
                    ))
                  }</span>
                </div>
                <div>
                  <span className="publish-title">出版信息：</span>
                  <span className="publish">{bookPublishInfo}</span>
                </div>
                <div className="summary-wrapper">
                  <span className="summary-title">内容摘要：</span>
                  <span className="summary">{bookSummary}</span>
                </div>
                <div>
                  <span className="num-title">剩余数量：</span>
                    <span className="num">{bookNum}</span>
                </div>
                <div>
                  <span className="operation-title">操作：</span>
                  <span className="operation">
                    <Button
                      type="primary"
                      shape="round"
                      size="small"
                      icon="book"
                      disabled={bookNum <= 0}
                    >
                      借阅
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>  
        <div className="recommend">
          <div className="recommend-title">猜你喜欢</div>
          <div className="book-list">
            {
              recommendBooks.map(book => {
                const { bookName, bookId, author } = book;
                return <Button key={bookId} type="link">{`《${bookName}》-${author}`}</Button>
              })
            }       
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
