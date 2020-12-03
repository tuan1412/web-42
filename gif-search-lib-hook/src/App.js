import React, { Component } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from './components/Header';
import FormSearch from './components/FormSearch';
import ImageCard from './components/ImageCard';
import Loading from './components/Loading';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      keyword: '',
      offset: 0,
      images: [],
      hasMore: true,
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

  fetchData = async (keyword, offset = 0) => {
    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=R8Tn7WP68lMvqGDTD9Qn82x9kZgAXZIR&q=${keyword}&limit=25&offset=${offset}&rating=g&lang=vi`;
    this.setState({ loading: true });

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
    const total = res.data.pagination.total_count;

    this.setState((oldState) => {
      const { images } = oldState;
      const newStateImages = offset === 0 ? newImages : [...images, ...newImages];

      const hasMore = newStateImages.length <= total;
      this.setState({
        images: newStateImages,
        loading: false,
        offset,
        hasMore
      })
    })
  }

  fetchMoreData = () => {
    const { keyword, offset } = this.state;
    this.fetchData(keyword, offset + 25)
  }

  debounceFetch = debounce((newKeyword) => {
    this.fetchData(newKeyword);
  }, 1000);

  handleChangeKeyword = (newKeyword) => {
    this.setState({ keyword: newKeyword });
    this.debounceFetch(newKeyword);
  }

  render() {
    const { loading, images, hasMore, keyword } = this.state;

    return (
      <div className="App">
        <div className="container mb-4">
          <Header />
          <FormSearch
            handleChangeKeyword={this.handleChangeKeyword}
            keyword={keyword}
            submitForm={this.fetchData}
          />
        </div>
        <div className="container">
          {loading && <Loading />}
          <InfiniteScroll
            dataLength={images.length}
            next={this.fetchMoreData}
            hasMore={hasMore}
            loader={images.length ? <Loading /> : null}
            scrollThreshold="100px"
            endMessage={
              <div>
                <b>Yay! You have seen it all</b>
              </div>
            }
          >
            {this.renderImages()}
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

export default App;
