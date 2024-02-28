import { Box, Button, Flex, Text } from '@chakra-ui/react'
// import React from 'react'
import { FilterIcon } from '../svg'
import { useState } from 'react'
import ModalLayout from '../modal_layout'
import filterdata from '../../../store/filterdata'

interface Props {
    type: "Gadget" | "Equipment" | "Library"
}

function Otherfilter(props: Props) {
    const { } = props

    const [show, setShow] = useState(false)

    const { filter, setFilter } = filterdata((state) => state);

    const datastatus = [
        "ACTIVE", "TEMPORARILY_DISABLED", "PERMANENTLY_DISABLED"
    ]

    return (
        <Box pos={"relative"} >
            <Button onClick={() => setShow(true)} w={"140px"} height={"45px"} bgColor={"white"} gap={"2"} fontSize={"16px"} fontWeight={"medium"} lineHeight={"24.3px"} display={"flex"} alignItems={"center"} justifyContent={"center"} rounded={"5px"} color={"#333333"} border={"1px solid #828282"} >
                <FilterIcon />
                Filter
            </Button>
            <ModalLayout size={"md"} title={"Filter"} open={show} close={setShow} >
                <Flex w={"full"} flexDir={"column"} >
                    <Text fontWeight={"700"} textAlign={"center"} >Status</Text>
                    <Flex px={"8"} mt={"3"} justifyContent={"center"} flexWrap={"wrap"} gap={"3"} >
                        {datastatus?.map((item: string, index: number) => {
                            return (
                                <Box key={index} rounded={"6px"} as='button' bgColor={item === filter?.status ? "#D9D9D9" : ""} onClick={() => setFilter({...filter, status: item})} fontSize={"14px"} fontWeight={"500"} py={"5px"} px={"4"} >
                                    {item}
                                </Box>
                            )
                        })}
                    </Flex>
                    <Box onClick={()=> setShow(false)} fontSize={"14px"} mt={"8"} fontWeight={"700"} mx={"auto"} as='button' >Show results</Box>
                    <Box onClick={()=> setFilter({status: ""})} fontSize={"12px"} color={"#676767"} mt={"1"} fontWeight={"400"} mx={"auto"} as='button' >Clear all</Box>
                </Flex>
            </ModalLayout>
        </Box>
    )
}

export default Otherfilter
