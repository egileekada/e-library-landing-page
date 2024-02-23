// import React from 'react'
import filterdata from '../../../store/filterdata';
import InputComponent from '../custom_input'
import { SearchIcon } from '../svg'

interface Props {}

function Searchbar(props: Props) {
    const {} = props


    const { setSearchValue, search } = filterdata((state) => state);

    return (
        <InputComponent value={search ? search : ""} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setSearchValue(e.target.value)} type={'text'} left={true} leftIcon={<SearchIcon />} placeholder="Search for e-books" />
    ) 
}

export default Searchbar
