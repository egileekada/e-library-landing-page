import { Box, Button } from '@chakra-ui/react'
// import React from 'react'
import { FilterIcon } from '../svg'

interface Props {}

function Otherfilter(props: Props) {
    const {} = props

    return (
        <Box pos={"relative"} >
            <Button w={"140px"} height={"45px"} bgColor={"white"} gap={"2"} fontSize={"16px"} fontWeight={"medium"} lineHeight={"24.3px"} display={"flex"} alignItems={"center"} justifyContent={"center"} rounded={"5px"} color={"#333333"} border={"1px solid #828282"} >
                <FilterIcon />
                Filter
            </Button>
        </Box>
    )
}

export default Otherfilter
