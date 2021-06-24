import React, {useEffect, useState} from 'react';
import SearchSalary from './SearchSalary'
import s from './App.module.css' ;

const App = (props) => {
    const arr = props.people

    const [filterName, setFilterName] = useState('')
    const [users, setUsers] = useState([]);

    const handleChangeName = e => {
        setFilterName(e.target.value);
    };


    useEffect(() => {
        const results = arr.filter((person) => {
                return person.name.toLowerCase().includes(filterName.toLowerCase())
            }
        );
        setUsers(results);
    }, [filterName]);

    return (
        <div>
            <form>
                <input type='text'
                       value={filterName}
                       onChange={handleChangeName}
                       placeholder='Search for surname'/>
                <ul>
                    {users.map(item => (
                        <li>{item.name}</li>
                    ))}
                </ul>
            </form>
            <SearchSalary people={props.people}/>
        </div>
    )
}

export default App;