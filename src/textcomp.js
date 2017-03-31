import React, { Component, PropTypes } from 'react';

export const TextComp = ({title="Sample 0", text="Sample 0 Sample 0"}) => (
  <div className="TextComp">
    <p>
      This is the text Component
    </p>
    <h1>{title}</h1>
    <span>{text}</span>
  </div>
)


TextComp.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}
