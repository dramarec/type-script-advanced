// FC принемает только фунциональные компоненты
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './init/store';

const App: FC = () => {
    return <Provider store={store}></Provider>;
};

export default App;
