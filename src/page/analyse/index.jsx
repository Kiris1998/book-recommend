import React from 'react';
import Donut from '../../components/Donut';
import './index.less';

class Index extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <div className="title">数据分析</div>
        <Donut className="chart"></Donut>
        <div className="analyse">你最爱的图书类型是，巴拉阿拉啦啦啦啦啦啦啦巴拉啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
      </div>
    );
  }
}

export default Index;
