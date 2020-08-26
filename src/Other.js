import React from 'react';
import { useLocation } from 'react-router-dom';

function Other() {
    return (
        <div className="App-main">
            {useLocation().pathname === '/' ? '' : 'Ошибка 404.'}
        </div>
    );
}

export default Other;
