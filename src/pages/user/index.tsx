import { Box, Flex } from '@chakra-ui/react'
import Filter from '../../components/shared_components/filter'
import Usertable from '../../components/user_components/usertable'
import Pagination from '../../components/shared_components/pagination'
import { useState } from 'react'
// import React from 'react'

interface Props { }

function UserPage(props: Props) {
    const { } = props

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalItem, setTotalItem] = useState(0)

    return (
        <Flex width={"full"} height={"full"} flexDir={"column"} pb={"4"} >
            <Filter />
            <Usertable setLimit={setLimit} setPage={setPage} setTotal={setTotalItem} limit={limit} page={page}  />
            <Box mt={"auto"} > 
                <Pagination  setLimit={setLimit} setPage={setPage} setTotal={setTotalItem} limit={limit} page={page} totalItem={totalItem}  />
            </Box>
        </Flex>
    )
}

export default UserPage
