import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { EyeArrow, PinIcon } from '../shared_components/svg'
import { ILibrary } from '../../models'
import Borrowbtn from './borrowbtn'
import { useNavigate } from 'react-router-dom'
import Returnbtn from './returnbtn'
// import React from 'react' 

function Tiles(props: ILibrary) {
    const {
        name,
        author,
        ISBN,
        value,
        thumbnail,
        IDNumber,
        id,
        status
    } = props


    const navigate = useNavigate()

    const statuscomponent = (item: any) => {
        if (item === "AVAILABLE") {
            return (
                <Flex bgColor={"#DEFFEB"} rounded={"20px"} px={"12px"} py={"4px"} justifyContent={"center"} alignItems={"center"} >
                    <Text fontSize={"14px"} lineHeight={"20.3px"} color={"#00451C"} >Available</Text>
                </Flex>
            )
        } else {
            return (
                <Flex bgColor={"#FFDCDC"} rounded={"20px"} px={"12px"} py={"4px"} justifyContent={"center"} alignItems={"center"} >
                    <Text fontSize={"14px"} lineHeight={"20.3px"} color={"#C50000"} >Unavailable</Text>
                </Flex>
            )
        }
    }

    const clickHandler = () => {
        navigate("/dashboard/library/info")
        localStorage.setItem("library", id + "")
    }

    return (
        <Box textAlign={"left"} w={"full"} pos={"relative"} p={"4"} >
            <Box w={"fit-content"} position={"absolute"} right={"3"} top={"3"} >
                <PinIcon />
            </Box>
            <Flex gap={"2"} alignItems={"end"} >
                <Box w={"80px"} h={"80px"} bgColor="gray" >
                    <Image w={"full"} h={"full"} objectFit={"cover"} alt='library' src={thumbnail} />
                </Box>
                {statuscomponent(status ? status : "")}
            </Flex>
            <Text color={"#1E1B39"} lineHeight={"21.7px"} fontSize={"18px"} fontWeight={"600"} mt={"4"} >{name}</Text>
            <Text fontSize={"14px"} lineHeight={"23.2px"} color={"#828282"} >Author: {author}</Text>
            {ISBN && (
                <Text fontSize={"14px"} lineHeight={"23.2px"} color={"#828282"} >ISBN: {ISBN}</Text>
            )}
            {IDNumber && (
                <Text fontSize={"14px"} lineHeight={"23.2px"} color={"#828282"} >ID Number: {IDNumber}</Text>
            )}
            <Text fontSize={"14px"} lineHeight={"23.2px"} color={"#828282"} >Value: ₦{value}</Text>
            <Flex gap={"4"} >
                <Button onClick={clickHandler} h={"45px"} gap={"3"} rounded={"5px"} width={"full"} mt={"4"} bgColor={"#1F7CFF0D"} _hover={{ backgroundColor: "#1F7CFF0D" }} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"#597AB8"} >
                    <EyeArrow />
                    View
                </Button>
                {status === "AVAILABLE" && (
                    <Borrowbtn {...props} />
                )}
                {status !== "AVAILABLE" && ( 
                    <Returnbtn {...props}/>
                )}
            </Flex>
        </Box>
    )
}

export default Tiles