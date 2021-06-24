import React, {useEffect, useState} from "react";

const SearchSalary = (props) => {
    const arr = props.people

    const [filterSalary, setFilterSalary] = useState('')
    const [salary, setSalary] = useState([]);

    const handleChangeSalary = e => {
        setFilterSalary(e.target.value);
    };

    useEffect(() => {
        const results = arr.filter((person) => {
                return person.salary.toLowerCase().includes(filterSalary.toLowerCase())
            }
        );
        setSalary(results);
    }, [filterSalary]);

    return (
        <form>
            <input type='text'
                   value={filterSalary}
                   onChange={handleChangeSalary}
                   placeholder='Search for salary'/>
            <ul>
                {salary.map(item => (
                    <li>{item.salary}</li>
                ))}
            </ul>
        </form>
    )
}

export default SearchSalary;