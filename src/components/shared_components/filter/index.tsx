import { Box, Button, Flex } from '@chakra-ui/react'
// import React from 'react'
import Searchbar from './searchbar'
import Otherfilter from './other_filter'
import Portalbtn from '../../elibrary_components/portalbtn'
import { useLocation } from 'react-router-dom'
import Adduserbtn from '../../user_components/adduserbtn'
import { DownloadTableExcel } from 'react-export-table-to-excel'

interface Props {
    name: string,
    tableRef: any
}

function Filter(props: Props) {
    const {
        name,
        tableRef
    } = props

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

                <DownloadTableExcel
                    filename={name + " Table"}
                    sheet="users"
                    currentTableRef={tableRef.current}
                >
                    <Button w={"140px"} height={"45px"} bgColor={"white"} gap={"2"} fontSize={"16px"} fontWeight={"medium"} lineHeight={"24.3px"} display={"flex"} alignItems={"center"} justifyContent={"center"} rounded={"5px"} color={"#333333"} border={"1px solid #828282"} >
                        Export XLS
                    </Button> 
                </DownloadTableExcel>
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
