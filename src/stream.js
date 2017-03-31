import React, { Component, PropTypes } from 'react';
import { TextComp } from './textcomp'
import { sampletext } from './sampletxt'
// const sampletext = [];

export const Stream = ({textstream=[]}) => (
  <div className="Stream">
    <p>
      This is the stream Component
    </p>
    {sampletext.length ?
      sampletext.map((item, i) => <TextComp {...item} />) :
      <p>The sample txt is empty!</p>
    }
  </div>
)
