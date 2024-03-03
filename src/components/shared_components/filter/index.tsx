import { Box, Button, Flex } from '@chakra-ui/react'
// import React from 'react'
import Searchbar from './searchbar'
import Otherfilter from './other_filter'
import Portalbtn from '../../elibrary_components/portalbtn'
import { useLocation } from 'react-router-dom'
import Adduserbtn from '../../user_components/adduserbtn'
import { DownloadTableExcel } from 'react-export-table-to-excel'
import Gadgetbtn from '../../gadget_compnonents/gadgetbtn'
import Equipmentbtn from '../../equipment_compnonents/equipmentbtn'
import AddPersonnelbtn from '../../personnel_components/addpersonnelbtn'
import Librarybtn from '../../library_components/librarybtn'

interface Props {
    name?: string,
    tableRef?: any
}

function Filter(props: Props) {
    const {
        name,
        tableRef
    } = props

    const path = useLocation()

    return (
        <Flex pt={"6"} pb={"4"} w={"full"} alignItems={"center"} >
            <Flex gap={"2"} width={"full"} >
                <Box w={"50%"} >
                    <Searchbar />
                </Box>
                {(path?.pathname === "/dashboard/library" || path?.pathname === "/dashboard/inventory/gadgets" || path?.pathname === "/dashboard/inventory/equipments") && (
                    <Otherfilter type={path?.pathname === "/dashboard/inventory/gadgets" ? "Gadget" : path?.pathname === "/dashboard/inventory/equipments" ? "Equipment" : "Library"} />
                )}
                {path?.pathname !== "/dashboard/elibrary" && (
                    <DownloadTableExcel
                        filename={name + " Table"}
                        sheet="users"
                        currentTableRef={tableRef.current}
                    >
                        <Button w={"140px"} height={"45px"} bgColor={"white"} gap={"2"} fontSize={"16px"} fontWeight={"medium"} lineHeight={"24.3px"} display={"flex"} alignItems={"center"} justifyContent={"center"} rounded={"5px"} color={"#333333"} border={"1px solid #828282"} >
                            Export XLS
                        </Button>
                    </DownloadTableExcel>
                )}
            </Flex>
            <Box width={"fit-content"} pl={"2"} >
                {path?.pathname === "/dashboard/elibrary" && (
                    <Portalbtn />
                )}
                {path?.pathname === "/dashboard/user" && (
                    <Adduserbtn />
                )}
                {path?.pathname === "/dashboard/inventory/gadgets" && (
                    <Gadgetbtn />
                )}
                {path?.pathname === "/dashboard/inventory/equipments" && (
                    <Equipmentbtn />
                )} 
                {path?.pathname === "/dashboard/personnel" && (
                    <AddPersonnelbtn />
                )}
                {path?.pathname === "/dashboard/library" && (
                    <Librarybtn />
                )}
                
            </Box>
        </Flex>
    )
}

export default Filter
