import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import App from 'scenes/main/App';
import registerServiceWorker from 'utils/registerServiceWorker';
import config from 'react-global-configuration';
import conf from 'configuration/Conf'
import 'utils/i18n';


config.set(conf);

ReactDOM.render(<App />, document.querySelector('#root'));
registerServiceWorker();
