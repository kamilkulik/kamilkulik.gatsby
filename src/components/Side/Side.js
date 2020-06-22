import React from 'react';

const Side = ({ children, sideName }) => {
  return <div className={sideName}>{children}</div>;
};

export default Side;
