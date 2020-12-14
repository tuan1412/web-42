import React from "react";
import Header from "./components/Header";
import FormSearch from "./components/FormSearch";
import ImageCard from "./components/ImageCard";
import Loading from "./components/Loading";

import "./App.css";

// component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      images: [],
    };
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
      );
    });
  };

  changeDataImages = (data, offset) => {
    this.setState((oldState) => {
      const { images } = oldState;
      if (!offset) {
        return { images: data };
      }
      return { images: [...images, ...data] };
    });
  };

  changeLoading = (bool) => {
    this.setState({
      loading: bool,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container mb-4">
          <Header loading={this.state.loading} />
          <FormSearch
            changeDataImages={this.changeDataImages}
            changeLoading={this.changeLoading}

          />
        </div>
        <div className="container">
          {this.state.loading && <Loading />}
          {this.renderImages()}
        </div>
      </div>
    );
  }
}

export default App;
