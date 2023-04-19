import React from 'react';
import ReactDOM from 'react-dom';

import Playground from './playground';

import '../json-diff/viewer.css';
import './index.less';

const Index: React.FC = () => {
  return <Playground onSwitch={() => {}} />

};

ReactDOM.render(<React.StrictMode><Index /></React.StrictMode>, document.getElementById('root'));
