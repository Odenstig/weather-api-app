import React, {useRef} from 'react'
import styles from './SearchForm.module.css';

const SearchForm = ({ callback }) => {

    const searchVal = useRef();

    const onFormSubmit = e => {
        e.preventDefault();
        callback(searchVal.current.value);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" ref={searchVal} placeholder="Search for a city.." />
                <button type="submit">Search</button>
            </form>
        </div>
    )
};

export default SearchForm;