import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';
import Loading from '../Loading';
import './style.css';

class ImageCard extends Component {
  renderPlaceholder = () => {
    return (
      <div style={{
        height: 300,
        backgroundColor: '#cecece'
      }}>
        <Loading />
      </div>
    )
  }
  render() {
    const { src, title, alt = "image" } = this.props;

    return (
      <div className="Image-card row">
        <div className="col-12 col-md-4">
        <ProgressiveImage
          delay={1000}
          src={src}
          // placeholder={this.renderPlaceholder}
        >
          {(src, loading) => {
            return loading ? this.renderPlaceholder() : <img src={src} alt={alt} />
          }}
        </ProgressiveImage>
        </div>
        <div className="col-12 col-md-8">
          <div>{title}</div>
        </div>
      </div>
    )
  }
}

export default ImageCard;
