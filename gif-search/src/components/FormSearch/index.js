import React, { Component } from 'react';
import axios from 'axios';

class FormSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: 'web fullstack'
    }
  }

  handleClick = async () => {
    const { keyword } = this.state;

    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=R8Tn7WP68lMvqGDTD9Qn82x9kZgAXZIR&q=${keyword}&limit=25&offset=${0}&rating=g&lang=vi`;

    const res = await axios({
      url: urlApi,
      method: 'GET',
    });

    const newImages = res.data.data.map(img => {
      return {
        src: img.images.downsized.url,
        alt: img.title,
        title: img.title
      }
    });
    this.props.changeDataImages(newImages)
  }
  
  // bind
  handleChange = (event) => {
    this.setState({
      keyword: event.target.value,
    })
  }

  render() {
    return (
      <div className="d-flex">
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          className="form-control" 
        />
        <button
          className="btn btn-primary ml-2"
          onClick={this.handleClick}
        >
          Tìm
        </button>
      </div>
    )
  }
}

export default FormSearch;
