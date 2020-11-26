import React from 'react';
import Header from './components/Header';
import FormSearch from './components/FormSearch';
import ImageCard from './components/ImageCard';

import './App.css';

// component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          src: 'https://media4.giphy.com/media/W3QKEujo8vztC/giphy.gif?cid=3c8e8684ijz5mcrcff64w12qppjuvmedcykyuwhsa8c78zs4&rid=giphy.gif',
          alt: 'mèo',
          title: 'Ảnh mèo'
        },
        {
          src: 'https://media4.giphy.com/media/W3QKEujo8vztC/giphy.gif?cid=3c8e8684ijz5mcrcff64w12qppjuvmedcykyuwhsa8c78zs4&rid=giphy.gif',
          alt: 'mèo',
          title: 'Hi hi ha ha'
        },
        {
          src: 'https://media4.giphy.com/media/W3QKEujo8vztC/giphy.gif?cid=3c8e8684ijz5mcrcff64w12qppjuvmedcykyuwhsa8c78zs4&rid=giphy.gif',
          alt: 'mèo',
          title: 'he he he he'
        }
      ]
    }
  }

  renderImages = () => {
    return this.state.images.map((image, idx) => {
      return (
        <ImageCard
          key={idx}
          src={image.src}
          alt={image.alt}
          title={image.title}
        />
      )
    })
  }

  changeDataImages = (data) => {
    this.setState({
      images: data
    })
  };
  
  render() {
    return (
      <div className="App">
        <div className="container mb-4">
          <Header />
          <FormSearch
            changeDataImages={this.changeDataImages}
          />
        </div>
        <div className="container">
          {this.renderImages()}
        </div>
      </div>
    )
  }
}

export default App;
