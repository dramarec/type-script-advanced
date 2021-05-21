// FC принемает только фунциональные компоненты
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Starships } from './bus/starships';
import { store } from './init/store';

const App: FC = () => {
    return (
        <Provider store={store}>
            <Starships />
        </Provider>
    )
};

export default App;
