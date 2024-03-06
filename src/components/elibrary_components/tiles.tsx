import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'
import { PinIcon } from '../shared_components/svg'
import { IPartner } from '../../models'
import { useNavigate } from 'react-router-dom'
import Updateform from './update_form'
// import React from 'react' 

function Tiles(props: IPartner) {
    const {
        imageUrl,
        partnerName,
        partnerResourceName,
        // partnerResourceUrl,
        id
    } = props

    const navigate = useNavigate()

    const clickHandler = () => {
        localStorage.setItem("currentpartner", id + "")
        navigate("/dashboard/elibrary/info")
    }

    return (
        <Box w={"full"} textAlign={"left"} pos={"relative"} p={"4"} >
            <Box w={"fit-content"} position={"absolute"} right={"3"} top={"3"} >
                <PinIcon />
            </Box>
            <Flex w={"full"} gap={"2"} alignItems={"end"} >
                <Box w={"80px"} h={"80px"} bgColor="gray" borderWidth={"3px"} rounded={"4px"}  > 
                    <Image w={"full"} h={"full"} rounded={"4px"} src={imageUrl} objectFit={"cover"} alt='parnter' /> 
                </Box>
            </Flex>
            <Text color={"#1E1B39"} lineHeight={"21.7px"} fontSize={"18px"} fontWeight={"600"} mt={"4"} >{partnerName}</Text>
            <Text fontSize={"14px"} lineHeight={"23.2px"} color={"#828282"} >Partner: {partnerResourceName}</Text>
            {/* <Text fontSize={"14px"} lineHeight={"23.2px"} color={"#828282"} >PID Number: {id}</Text> */}
            <Flex w={"full"} gap={"4"} >
                <Button onClick={() => clickHandler()} h={"45px"} gap={"2"} rounded={"5px"} width={"full"} mt={"4"} bgColor={"#1F7CFF"} _hover={{ backgroundColor: "#1F7CFF" }} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"white"} >
                    View
                </Button>
                <Updateform data={props} />
            </Flex>
        </Box>
    )
}

export default Tiles
