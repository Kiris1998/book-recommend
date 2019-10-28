import React, { Component } from 'react';
import './index.less';

class Fave extends Component {
  render() {
    const {size, fave} = this.props
    const style = {
      width: size,
      height: size,
      left: -size / 2,
      top: -size /2,
    }
    const animation_class = fave ? 'fave-ani' : ''
    return (
      <span className={`twitter-fave ${animation_class}`} style={style} >
      </span>
    );
  }
}

export default Fave;
