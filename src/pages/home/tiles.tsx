import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'
import { IPartner } from '../../models'
import { capitalizeFLetter } from '../../util/capitalLetter'
import { textLimit } from '../../util/textlimit'
// import React from 'react' 

function Tiles(props: IPartner) {
    const {
        imageUrl,
        partnerName,
        partnerResourceName,
        partnerResourceUrl,
    } = props

    return (
        <Flex w={"full"} h={"full"} textAlign={"left"} flexDir={"column"} pos={"relative"} p={"4"} >
            <Flex w={"full"} gap={"2"} alignItems={"end"} >
                <Box w={"80px"} h={"auto"} bgColor="gray" borderWidth={"3px"} rounded={"12px"}  >
                    <Image w={"full"} h={"full"} rounded={"12px"} src={imageUrl} objectFit={"contain"} alt='parnter' />
                </Box>
            </Flex>
            <Text color={"#1E1B39"} lineHeight={"21.7px"} fontSize={"18px"} fontWeight={"600"} mt={"4"} >{textLimit(capitalizeFLetter(partnerName), 20)}</Text>
            <Text fontSize={"14px"} lineHeight={"23.2px"} color={"#828282"} >Partner: {textLimit(partnerResourceName, 25)}</Text> 
            <Flex w={"full"} pt={"3"} gap={"4"} mt={"auto"}  >

                <a href={partnerResourceUrl} style={{ width: "100%" }} target="_blank" >
                    <Button h={"45px"} w={"full"} gap={"2"} rounded={"5px"} width={"full"} bgColor={"#1F7CFF"} _hover={{ backgroundColor: "#1F7CFF" }} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"white"} >
                        View
                    </Button>
                </a>
            </Flex>
        </Flex>
    )
}

export default Tiles

