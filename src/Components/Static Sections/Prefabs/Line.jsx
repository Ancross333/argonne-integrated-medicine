import React from 'react';

export default function Line({ color }) {
  const lineStyle = {
    height: '10px',
    width: '100%',
    backgroundColor: color,
  };

  return <div style={lineStyle}></div>;
}
