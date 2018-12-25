import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './container.css';

const Component = ({ children }) => <Container>{children}</Container>;

Component.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Component;
