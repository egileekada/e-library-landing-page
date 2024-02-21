import { Box, Grid, GridItem } from '@chakra-ui/react'
import Filter from '../../components/shared_components/filter'
import Tiles from '../../components/elibrary_components/tiles'
// import React from 'react'

interface Props { }

function Elibrary(props: Props) {
    const { } = props

    return (
        <Box width={"full"} >
            <Filter />
            <Grid templateColumns='repeat(3, 1fr)' gap={4} py={"4"}>
                <GridItem w={"full"} borderWidth={"0.5px"} rounded={"10px"} bgColor={"#FCFCFC"} borderColor={"#BDBDBD"} >
                    <Tiles />
                </GridItem> 
            </Grid>
        </Box>
    )
}

export default Elibrary
