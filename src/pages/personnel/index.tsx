import { Box, Flex } from '@chakra-ui/react'
import Filter from '../../components/shared_components/filter'
import Pagination from '../../components/shared_components/pagination'
import { useRef, useState } from 'react'
import Admintable from '../../components/personnel_components/personneltable'
// import React from 'react'

interface Props { }

function AdminPage(props: Props) {
    const { } = props

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalItem, setTotalItem] = useState(0)
    const [data, setData] = useState([] as Array<any>)

    const tableRef: any = useRef(null);

    return (
        <Flex width={"full"} height={"full"} flexDir={"column"} pb={"4"} >
            <Filter data={data} name='Admin' />
            <Admintable setDataInfo={setData} tableRef={tableRef} setLimit={setLimit} setPage={setPage} setTotal={setTotalItem} limit={limit} page={page} />
            <Box mt={"auto"} pt={"12"} >
                <Pagination setLimit={setLimit} setPage={setPage} setTotal={setTotalItem} limit={limit} page={page} totalItem={totalItem} />
            </Box>
        </Flex>
    )
}

export default AdminPage
