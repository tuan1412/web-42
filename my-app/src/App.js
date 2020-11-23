import React from 'react';
// import logo from './logo.svg';
import VueLogo from './assets/images/vue.png';
import Header from './Header';

import './App.css';
import Typo from './Typo';

// component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'class'
    }
  }

  changeTypo = () => {
    this.setState({
      title: 'hiiii'
    })
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     // console.log('runnnnnn')
  //     // this.state = { title: 'function' }
  //     this.setState({
  //       title: 'hehe'
  //     })
  //   }, 3000)
  // }
  // jsx
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header 
            title={this.state.title}
            changeTypo={this.changeTypo}
          />
          <Typo title={this.state.title} />
          {/* <Header title="function" />
          <Header title="javascript" /> */}
          <header className="App-header">
            <img src={VueLogo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code>.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
          <p>Hehe</p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
