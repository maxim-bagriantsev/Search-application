import React, {useEffect, useState} from 'react';
import s from './App.module.css';

const App = (props) => {
    const arr = props.people

    const [filterName, setFilterName] = useState('');
    const [filterSalary, setFilterSalary] = useState('');
    const [filterCity, setFilterCity] = useState('');

    const [users, setUsers] = useState([]);

    const handleChangeName = e => {
        setFilterName(e.target.value);
    };

    const handleChangeSalary = e => {
        setFilterSalary(e.target.value);
    }
    const handleChangeCity = e => {
        setFilterCity(e.target.value);
    };

    useEffect(() => {

        const res = arr.filter(person => person.name.toLowerCase().startsWith(filterName.toLowerCase()))
            .filter(person => person.salary.toString().startsWith(filterSalary))
            .filter(person => person.city.toLowerCase().startsWith(filterCity.toLowerCase()))

        setUsers(res);

    }, [filterName, filterSalary, filterCity, arr]);

    return (
        <div>
            <form>
                <input type='text'
                       value={filterName}
                       onChange={handleChangeName}
                       placeholder='Search for surname'/>

                <input type='text'
                       value={filterSalary}
                       onChange={handleChangeSalary}
                       placeholder='Search for salary'/>

                <input type='text'
                       value={filterCity}
                       onChange={handleChangeCity}
                       placeholder='Search for city'/>
                <ul>
                    {users.map(item => (
                        <li key={item.id}>{`ИМЯ: ${item.name}; ЗАРПЛАТА: ${item.salary}; ГОРОД: ${item.city}`} </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}

export default App;