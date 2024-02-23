import { Box, Flex, Text } from '@chakra-ui/react'
import { FileColored, Notification } from '../svg'
import { useLocation } from 'react-router-dom'
// import React from 'react'

interface Props { }

function Navbar(props: Props) {
    const { } = props

    const path = useLocation()

    let name = localStorage.getItem("name") as string

    return (
        <Flex px={"6"} py={"4"} width={"full"} alignItems={"center"} justifyContent={"space-between"} >
            <Flex alignItems={"center"} gap={"2"} >
                <FileColored />
                <Text color={"#333333"} lineHeight={"24.2px"} fontWeight={"medium"} fontSize={"20px"} >
                    {path.pathname === "/dashboard" && (
                        "Dashboard"
                    )}
                    {path.pathname === "/dashboard/elibrary" && (
                        "E-Library"
                    )}
                    {path.pathname === "/dashboard/user" && (
                        "User"
                    )}
                </Text>
            </Flex>
            <Flex alignItems={"center"} >
                <Notification />
                <Box width={"36px"} height={"36px"} rounded={"full"} bgColor={"#D9D9D9"} ml={"6"} />
                <Text color={"#010203"} lineHeight={"19.36px"} ml={"2"} >{name?.length > 12 ? name?.slice(0, 12)+"..." : name}</Text>
            </Flex>
        </Flex>
    )
}

export default Navbar
