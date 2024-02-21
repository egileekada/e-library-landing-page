import { Flex, Text } from '@chakra-ui/react'
// import React from 'react'

interface Props { }

function ImageSelector(props: Props) {
    const { } = props

    return (
        <Flex h={"45px"} w={"full"} rounded={"5px"} justifyContent={"center"} alignItems={"center"} borderStyle={"dashed"} borderWidth={"1px"} borderColor={"#ADADAD"}  >
            <Text color={"#909090"} lineHeight={"20.3px"} textAlign={"center"} fontSize={"14px"} >Click to upload</Text>
        </Flex>
    )
}

export default ImageSelector
