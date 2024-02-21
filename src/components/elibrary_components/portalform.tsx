import { Box, Button, Flex, Select, Text } from '@chakra-ui/react'
// import React from 'react'
import InputComponent from '../shared_components/custom_input'
import ImageSelector from '../shared_components/image_selector'

interface Props { }

function Portalform(props: Props) {
    const { } = props

    return (
        <Flex w={"full"} gap={"4"} flexDir={"column"} pb={"4"} >
            <Box w={"full"} >
                <Text color={"#101928"} fontSize={"14px"} fontWeight={"500"} mb={"1"} >Partner Name</Text>
                <InputComponent type='text' />
            </Box>
            <Box w={"full"} >
                <Text color={"#101928"} fontSize={"14px"} fontWeight={"500"} mb={"1"} >Partner Resource Name</Text>
                <Select placeholder='Microsoft Viva Learn' fontSize={"14px"} bgColor="#FCFCFC" borderColor="#BDBDBD" _hover={{ borderColor: "#BDBDBD" }} _focus={{ backgroundColor: "#FCFCFC" }} focusBorderColor="#BDBDBD" height={"45px"}>
                    <option>Item</option>
                    <option>Item</option>
                    <option>Item</option>
                </Select>
            </Box>
            <Box w={"full"} >
                <Text color={"#101928"} fontSize={"14px"} fontWeight={"500"} mb={"1"} >Partner Link</Text>
                <InputComponent placeholder="https://xyz.com" type='text' />
            </Box>
            <Box w={"full"} >
                <Text color={"#101928"} fontSize={"14px"} fontWeight={"500"} mb={"1"} >Image</Text>
                <ImageSelector />
            </Box>

            <Button h={"45px"} gap={"2"} rounded={"5px"} width={"full"} mt={"4"} bgColor={"#1F7CFF"} _hover={{ backgroundColor: "#1F7CFF" }} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"white"} >
                Create
            </Button>
        </Flex>
    )
}

export default Portalform
