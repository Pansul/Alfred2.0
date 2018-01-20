import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import a from './a.png';
import b from './b.png';
import c from './c.png';
import d from './d.png';
import e from './e.png';
import f from './f.png';
import g from './g.png';
import registerServiceWorker from './registerServiceWorker';

export {a,b,c,d,e,f,g};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
