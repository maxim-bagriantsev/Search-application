import React, {useEffect, useState} from 'react';

import s from './App.module.css' ;

const App = (props) => {
    const arr = props.people
    const [filter, setFilter] = useState('')
    const [users, setUsers] = useState([]);

    const handleChange = e => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        const results = arr.filter((person) => {
                return person.name.toLowerCase().includes(filter.toLowerCase())
            }
        );
        setUsers(results);
    }, [filter]);

    return (
        <div>
            <form>
                <input type='text' value={filter} onChange={handleChange} placeholder='Search for surname'/>
                <ul>
                    {users.map(item => (
                        <li>{item.name}</li>
                    ))}
                </ul>
            </form>
        </div>
    )
}

export default App;