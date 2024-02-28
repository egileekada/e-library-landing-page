import { Box, Flex } from '@chakra-ui/react'
import { useState, useRef } from 'react'
import Filter from '../../components/shared_components/filter'
import Pagination from '../../components/shared_components/pagination' 
import GadgetTable from '../../components/gadget_compnonents/gadgettable'
// import React from 'react'

interface Props {}

function GadgetsPage(props: Props) {
    const {} = props

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalItem, setTotalItem] = useState(0)

    const tableRef: any = useRef();

    return (
        <Flex width={"full"} height={"full"} flexDir={"column"} pb={"4"} >
            <Filter tableRef={tableRef} name={'User'} />
            <GadgetTable  tableRef={tableRef} setLimit={setLimit} setPage={setPage} setTotal={setTotalItem} limit={limit} page={page}  />
            <Box mt={"auto"} pt={"12"} > 
                <Pagination  setLimit={setLimit} setPage={setPage} setTotal={setTotalItem} limit={limit} page={page} totalItem={totalItem}  />
            </Box>
        </Flex>
    )
}

export default GadgetsPage
