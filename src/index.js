import React from 'react';
import ReactDOM from 'react-dom/client';
import Relogio from '../../src/Relogio';
import Letreiro from '../../src/Letreiro';
import Contador from '../../src/Contador';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Relogio/>
 <Letreiro/>
 <Contador/>
 </>
);
