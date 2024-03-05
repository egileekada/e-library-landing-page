import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { PinIcon } from '../shared_components/svg'
import { IPartner } from '../../models'
// import React from 'react' 

function Tiles(props: IPartner) {
    const {
        imageUrl,
        partnerName,
        partnerResourceName,
        partnerResourceUrl,
        // id
    } = props

    return (
        <Box pos={"relative"} p={"4"} >
            <Box w={"fit-content"} position={"absolute"} right={"3"} top={"3"} >
                <PinIcon />
            </Box>
            <Flex gap={"2"} alignItems={"end"} >
                <Box w={"80px"} h={"80px"} bgColor="gray" >
                    <Image w={"full"} h={"full"} objectFit={"cover"} alt='parnter' src={imageUrl} />
                </Box>
                {/* <Flex bgColor={"#DEFFEB"} rounded={"20px"} px={"12px"} py={"4px"} justifyContent={"center"} alignItems={"center"} >
                    <Text fontSize={"14px"} lineHeight={"20.3px"} color={"#00451C"} >Available</Text>
                </Flex> */}
            </Flex>
            <Text color={"#1E1B39"} lineHeight={"21.7px"} fontSize={"18px"} fontWeight={"600"} mt={"4"} >{partnerName}</Text>
            <Text fontSize={"14px"} lineHeight={"23.2px"} color={"#828282"} >Partner: {partnerResourceName}</Text>
            {/* <Text fontSize={"14px"} lineHeight={"23.2px"} color={"#828282"} >PID Number: {id}</Text> */}
            <a href={partnerResourceUrl} target={"_blank"} > 
                <Button h={"45px"} gap={"2"} rounded={"5px"} width={"full"} mt={"4"} bgColor={"#1F7CFF"} _hover={{ backgroundColor: "#1F7CFF" }} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"white"} >
                    View
                </Button>
            </a>
        </Box>
    )
}

export default Tiles
