import React, { FC, useState } from 'react';

type TPropTypes = {
    title?: string;
    children?: never;
};

const Header: FC<TPropTypes> = ({ title }: TPropTypes) => {
    const content = typeof title === 'string' ? title.toUpperCase() : null;
    const [counter, setCounter] = useState(1);

    const increment = (): void => setCounter(prev => prev + 1);
    const decrement = (): void => setCounter(prev => prev - 1);

    return (
        <div
            style={{
                // height: '90vh',
                // backgroundColor: 'green',
                padding: 40,
            }}
        >
            <h1>{content}</h1>
            <h3>{counter.toFixed()}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
};

Header.defaultProps = {
    title: 'Hello World',
};

export default Header;
