import React, {useEffect, useState} from 'react';
import s from './App.module.css';

const App = (props) => {
    const arr = props.people

    const [filterName, setFilterName] = useState('')
    const [users, setUsers] = useState([]);

    const [filterSalary, setFilterSalary] = useState('')

    const handleChangeName = e => {
        setFilterName(e.target.value);
    };

    const handleChangeSalary = e => {
        setFilterSalary(e.target.value);
    };


    useEffect(() => {
        const result = arr.filter((person) => {
            return person.name.toLowerCase().includes(filterName.toLowerCase()) && person.salary.toString().includes(filterSalary); // МОЖНО И ТАК НАПИСАТЬ - В НАШЕМ СЛУЧАЕ БУДЕТ РАБОТАТЬ
        })
        setUsers(result);

    }, [filterName, filterSalary]);

    return (
        <div>
            <form>
                <input type='text'
                       value={filterName}
                       onChange={handleChangeName}
                       placeholder='Search for surname'/>
                <ul>
                    {users.map(item => (
                        <li key={item.id}>{item.name} </li>
                    ))}
                </ul>
            </form>
            <form>
                <input type='text'
                       value={filterSalary}
                       onChange={handleChangeSalary}
                       placeholder='Search for salary'/>
                <ul>
                    {users.map(item => (
                        <li key={item.id}>{item.salary} </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}

export default App;