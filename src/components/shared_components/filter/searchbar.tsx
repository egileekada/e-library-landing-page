// import React from 'react'
import InputComponent from '../custom_input'
import { SearchIcon } from '../svg'

interface Props {}

function Searchbar(props: Props) {
    const {} = props

    return (
        <InputComponent type={'text'} left={true} leftIcon={<SearchIcon />} placeholder="Search for e-books" />
    )
}

export default Searchbar
