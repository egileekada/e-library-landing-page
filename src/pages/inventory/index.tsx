import { Box, Flex, Text } from '@chakra-ui/react'
import { ForwardArrow } from '../../components/shared_components/svg'
import { useNavigate } from 'react-router-dom'
// import React from 'react'

interface Props {}

function InventoryPage(props: Props) {
    const {} = props

    const navigate = useNavigate()

    return (
        <Flex width={"full"} gap={"6"} pt={"8"} >
            <Flex onClick={()=> navigate("/dashboard/inventory")} disabled={true} as='button' width={"full"} border={"1px solid #BDBDBD"} bgColor={"#FCFCFC"} px={"4"} py={"6"} rounded={"10px"} flexDir={"column"} >
                <Flex height={"162px"} w={"full"} gap={"2"} >
                    <Box width={"full"} height={"full"} bgColor={"#E9F2FF"} />
                    <Box width={"full"} height={"full"} bgColor={"#E9F2FF"} />
                    <Box width={"full"} height={"full"} bgColor={"#E9F2FF"} />
                </Flex>
                <Flex pt={"5"} width={"full"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text fontWeight={"700"} fontSize={"18px"} color={"#1E1B39"} >Literature</Text>
                    <ForwardArrow />
                </Flex>
            </Flex>
            <Flex onClick={()=> navigate("/dashboard/inventory/equipments")} as='button' width={"full"} border={"1px solid #BDBDBD"} bgColor={"#FCFCFC"} px={"4"} py={"6"} rounded={"10px"} flexDir={"column"} >
                <Flex height={"162px"} w={"full"} gap={"2"} >
                    <Box width={"full"} height={"full"} bgColor={"#EFE9FF"} />
                    <Box width={"full"} height={"full"} bgColor={"#EFE9FF"} />
                    <Box width={"full"} height={"full"} bgColor={"#EFE9FF"} />
                </Flex>
                <Flex pt={"5"} width={"full"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text fontWeight={"700"} fontSize={"18px"} color={"#1E1B39"} >Equipment</Text>
                    <ForwardArrow />
                </Flex>
            </Flex>
            <Flex onClick={()=> navigate("/dashboard/inventory/gadgets")} as='button' width={"full"} border={"1px solid #BDBDBD"} bgColor={"#FCFCFC"} px={"4"} py={"6"} rounded={"10px"} flexDir={"column"} >
                <Flex height={"162px"} w={"full"} gap={"2"} >
                    <Box width={"full"} height={"full"} bgColor={"#E8F1E6"} />
                    <Box width={"full"} height={"full"} bgColor={"#E8F1E6"} />
                    <Box width={"full"} height={"full"} bgColor={"#E8F1E6"} />
                </Flex>
                <Flex pt={"5"} width={"full"} justifyContent={"space-between"} alignItems={"center"} >
                <Text fontWeight={"700"} fontSize={"18px"} color={"#1E1B39"} >Gadgets</Text>
                    <ForwardArrow />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default InventoryPage
