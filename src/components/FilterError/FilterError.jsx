import React from 'react';

import { Alert } from 'antd';

import 'antd/dist/antd.css';

const FilterError = () => (
  <>
    <Alert description="Рейсов, подходящих под заданные фильтры, не найдено" type="warning" />
  </>
);

export default FilterError;
