import { Box, Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FileIcon, Home, Library, Logout, User } from '../svg'
import { useLocation, useNavigate } from 'react-router-dom'

interface Props { }

function Sidebar(props: Props) {
    const { } = props

    const [activeTab, setActiveTab] = useState("/dashboard")

    const path = useLocation() 
    const navigate = useNavigate()


    const menulist = [
        {
            name: "Dashboard",
            router: "/dashboard"
        },
        {
            name: "Inventory",
            router: "/dashboard/inventory"
        },
        {
            name: "Library",
            router: "/dashboard/library"
        },
        {
            name: "E-Library",
            router: "/dashboard/elibrary"
        },
        {
            name: "Personnel",
            router: "/dashboard/personnel"
        },
        {
            name: "User",
            router: "/dashboard/user"
        }
    ]

    useEffect(() => {
        setActiveTab(path.pathname)
    }, [])

    const clickHandler =(item: string)=> {
        navigate(item)
        setActiveTab(item)
    }

    const logOut =()=> {
        localStorage.clear()
        navigate("/")
    }

    return (
        <Flex w={"300px"} flexDir={"column"} h={"100vh"} py={"7"} px={"4"} >
            <Box w={"full"} px={"2"} >
                <Box bgColor={"#D9D9D9"} width={"179px"} height={"59px"} />
            </Box>
            <Flex w={"full"} py={"8"} flexDir={"column"} gap={"3"} >
                {menulist?.map((item: { name: string, router: string }, index: number) => {
                    return (
                        <Flex onClick={()=> clickHandler(item?.router)} as={"button"} key={index} w={"full"} h={"45px"} px={"4"} gap={"2"} alignItems={"center"} bgColor={item?.router === activeTab ? "#1F7CFF1A" : ""} rounded={"3px"} >
                            <Box width={"25px"}>
                                {item?.name === "Dashboard" && (
                                    <Home color={item?.router === activeTab ? "#114EA3" : ""} />
                                )}
                                {(item?.name === "Inventory" || item?.name === "E-Library" || item?.name === "Personnel") && (
                                    <FileIcon color={item?.router === activeTab ? "#114EA3" : ""} />
                                )}
                                {item?.name === "User" && (
                                    <User color={item?.router === activeTab ? "#114EA3" : ""} />
                                )}
                                {item?.name === "Library" && (
                                    <Library color={item?.router === activeTab ? "#114EA3" : ""} />
                                )}
                            </Box>
                            <Text color={item?.router === activeTab ? "#114EA3" : "#8C8C8C"} fontWeight={"medium"} lineHeight={"16.94px"} fontSize={"14px"} >{item.name}</Text>
                        </Flex>
                    )
                })}
            </Flex> 
            <Flex onClick={logOut} mt={"auto"} as={"button"} w={"full"} h={"45px"} px={"4"} gap={"2"} alignItems={"center"} rounded={"3px"} >
                <Box width={"25px"}>
                    <Logout />
                </Box>
                <Text color={"#8C8C8C"} fontWeight={"medium"} lineHeight={"16.94px"} fontSize={"14px"} >Logout</Text>
            </Flex>
        </Flex>
    )
}

export default Sidebar
