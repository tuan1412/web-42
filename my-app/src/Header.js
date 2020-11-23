import React from 'react';
import './Header.css';
import Typo from './Typo';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleClick = () => {
    this.props.changeTypo();
  }

  render() {
    return (
      <p className="Header">
        <span className="Header-span">
          <button onClick={this.handleClick}>Click</button>
        </span>
      </p>
    )
  }
}
// function Header() {
//   // hooks
//   return (
//     <p className="Header"><span className="Header-span">Hi</span></p>
//   )
// }

export default Header;