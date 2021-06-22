import PropTypes from 'prop-types';
import MyContext from './MyContext';
import React, { Component } from 'react'

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    }
  }

  changeSignal = (signalColor) => {

    this.setState({
      ...this.state,
        signal: { color: signalColor }, 
    });
  }

  moveCar = (car, side) => {
    this.setState({
      cars: {
        [car]: side ,
      },
    });
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }
    const { children } = this.props;
    return (
      <MyContext.Provider value={ context }>
        { children }
      </MyContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
