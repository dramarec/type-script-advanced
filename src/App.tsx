// FC принемает только фунциональные компоненты
import React, { FC } from 'react';
import Header from './components/Header';

const App: FC = () => {
    return <Header title="Home" />;
};

export default App;
