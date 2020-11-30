import React, { Component } from 'react';
import { debounce, throttle } from 'lodash';
import axios from 'axios';

class FormSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      keyword: ''
    }
  }

  componentDidMount() {
    window.onscroll = this.throttleScroll;
  }


  throttleScroll = throttle(() => {
    if ((window.innerHeight + window.scrollY)
      >= document.body.scrollHeight - 100
    ) {
      // you're at the bottom of the page
      this.setState(({ offset = 0 }) => {
        // const { offset } = oldState;
        return {
          offset: offset + 25
        }
      }, () => {
        this.fetchData(this.state.keyword, this.state.offset);
      })
    }

  }, 1000)

  // timeout = null;

  // page đếm từ 1, một page có 50 phần tử
  // client truyền lên page = 2, offset = (page - 1) * limit
  fetchData = async (keyword, offset = 0) => {
    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=R8Tn7WP68lMvqGDTD9Qn82x9kZgAXZIR&q=${keyword}&limit=25&offset=${offset}&rating=g&lang=vi`;
    this.props.changeLoading(true);

    const res = await axios({
      url: urlApi,
      method: 'GET',
    });

    this.props.changeLoading(false);
    const newImages = res.data.data.map(img => {
      return {
        src: img.images.downsized.url,
        alt: img.title,
        title: img.title
      }
    });
    this.props.changeDataImages(newImages, offset);
  }

  handleClick = async () => {
    const { keyword } = this.state;
    this.fetchData(keyword);
  }

  debounceFetch = debounce(() => {
    this.fetchData(this.state.keyword);
  }, 1000);

  // bind
  handleChange = (event) => {
    // this.setState là hàm bất đồng bộ
    this.setState({
      keyword: event.target.value,
    }, this.debounceFetch)
  }

  // handleChange = (event) => {
  //   this.setState({
  //     keyword: event.target.value,
  //   }, () => {
  //     if (this.timeout) {
  //       clearTimeout(this.timeout);
  //     }
  //     setTimeout(() => {
  //       this.fetchData(this.state.keyword);
  //     }, 1000)
  //   })
  // }

  render() {
    console.log('render');
    return (
      <div className="d-flex" id="form">
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
