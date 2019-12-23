import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Name = ({ name }) => <Text style={{ fontSize: 32 }}> {name} </Text>;

Name.propTypes = {
  name: PropTypes.string
};

export default Name;
