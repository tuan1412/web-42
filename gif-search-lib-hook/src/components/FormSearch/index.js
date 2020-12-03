import React, { Component } from 'react';

class FormSearch extends Component {
  handleClick = async () => {
    const { keyword } = this.props;
    this.props.submitForm(keyword);
  }

  // bind
  handleChange = (event) => {
    this.props.handleChangeKeyword(event.target.value);
  }

  render() {
    const { keyword } = this.props;
    return (
      <div className="d-flex" id="form">
        <input
          value={keyword}
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
