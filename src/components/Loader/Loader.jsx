import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import './Loader.module.css';
import 'antd/dist/antd.css';

const Loader = ({ loading }) => <Spin spinning={!loading} />;

export default Loader;

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
