import React, {useEffect, useState} from 'react';
import s from './App.module.css' ;

const App = (props) => {
    const arr = props.people

    const [filterName, setFilterName] = useState('')
    const [users, setUsers] = useState([]);

    const [filterSalary, setFilterSalary] = useState('')
    const [salary, setSalary] = useState([]);

    const handleChangeName = e => {
        setFilterName(e.target.value);
    };

    const handleChangeSalary = e => {
        setFilterSalary(e.target.value);
    };


    useEffect(() => {
        if (!isNaN(filterName)) {
            const results = arr.filter((person) => {
                    return person.name.toLowerCase().includes(filterName.toLowerCase())
                }
            );
            setUsers(results);

        }
        else {
            const results = arr.filter((person) => {
                    return person.salary.includes(filterSalary.toLowerCase())
                }
            );
            setSalary(results);
        }
    }, [filterName], [filterSalary]);

    return (
        <div>
            <form>
                <input type='text'
                       value={filterName}
                       onChange={handleChangeName}
                       placeholder='Search for surname'/>
                <ul>
                    {users.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </form>
            <form>
                <input type='text'
                       value={filterSalary}
                       onChange={handleChangeSalary}
                       placeholder='Search for salary'/>
                <ul>
                    {salary.map(item => (
                        <li key={item.id}>{item.salary}</li>
                    ))}
                </ul>
            </form>
        </div>
    )
}

export default App;