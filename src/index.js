import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const people = [
    {id: 1, name: 'bob', salary: 3333},
    {id: 2, name: 'ivan', salary: 12354},
    {id: 3, name: 'pablo', salary: 54321}
]

ReactDOM.render(<App people={people}/>, document.getElementById('root'));

