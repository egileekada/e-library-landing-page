import { Flex } from '@chakra-ui/react'
import { AreaChart, BarChart, CircleChart, Piechart } from '../../components/shared_components/svg'
// import React from 'react'

interface Props {}

function DashboardPage(props: Props) {
    const {} = props

    return (
        <Flex flexDir={"column"} gap={"4"} py={"6"} width={"full"} height={"full"} >
            <Flex w={'full'} gap={"4"} > 
                <Piechart />
                <AreaChart />
                <CircleChart />
            </Flex>
            <BarChart />
        </Flex>
    )
}

export default DashboardPage
