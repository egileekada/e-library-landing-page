import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
// import React from 'react' 

function DashboardLayout() { 

    return (
        <Flex width={"full"} overflow={"hidden"} >
            <Box width={"fit-content"} style={{boxShadow: "0px 4px 15px 0px #8E8E8E12"}} >
                <Sidebar />
            </Box>
            <Flex position={"relative"} flexDir={"column"} w={"full"} h={"100vh"} overflowY={"auto"} >
                <Outlet />
            </Flex>
        </Flex>
    )
}

export default DashboardLayout
