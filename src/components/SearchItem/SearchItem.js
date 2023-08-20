import styles from './SearchItem.module.scss'
import { useState } from 'react';
export default function SearchItem({onSearch}){
const [searchTerm,setSearchTerm] = useState('')

function handleChange(evt){
    setSearchTerm(evt.target.value)
}

function handleSubmit(evt){
    evt.preventDefault();
    onSearch(searchTerm)
     setSearchTerm('')
}

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search shoes...'value={searchTerm}
                onChange={handleChange}></input>
                <button className={styles.btn}type="submit">Search</button>
            </form>
        </div>
    )
    
}