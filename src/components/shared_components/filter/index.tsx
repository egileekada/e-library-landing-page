import { Box, Flex } from '@chakra-ui/react'
// import React from 'react'
import Searchbar from './searchbar'
import Otherfilter from './other_filter'
import Portalbtn from '../../elibrary_components/portalbtn'
import { useLocation } from 'react-router-dom'
import Adduserbtn from '../../user_components/adduserbtn'

interface Props { }

function Filter(props: Props) {
    const { } = props

    const path = useLocation()

    return (
        <Flex pt={"6"} pb={"4"} w={"full"} alignItems={"center"} >
            <Flex gap={"4"} width={"full"} >
                <Box w={"50%"} >
                    <Searchbar />
                </Box> 
                {path?.pathname === "/dashboard/library" && (
                    <Otherfilter />
                )}
            </Flex>
            <Box width={"fit-content"} >
                {path?.pathname === "/dashboard/elibrary" && (
                    <Portalbtn />
                )}
                {path?.pathname === "/dashboard/user" && (
                    <Adduserbtn />
                )}
            </Box>
        </Flex>
    )
}

export default Filter
