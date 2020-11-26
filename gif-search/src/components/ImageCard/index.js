import React, { Component } from 'react';
import './style.css';

class ImageCard extends Component {
  render() {
    const { src, title, alt = "image" } = this.props;

    return (
      <div className="Image-card row">
        <div className="col-12 col-md-4">
          <img src={src} alt={alt} />
        </div>
        <div className="col-12 col-md-8">
          <div>{title}</div>
        </div>
      </div>
    )
  }
}

export default ImageCard;
