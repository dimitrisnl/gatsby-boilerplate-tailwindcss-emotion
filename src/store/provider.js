import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './createContext';

class AppProvider extends Component {
  state = {
    counter: 0,
    increase: () => this.setState({ counter: this.state.counter + 1 }),
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
