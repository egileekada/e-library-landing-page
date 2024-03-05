import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useRef } from 'react'
import QRCode from 'react-qr-code'
import { PrintIcon } from '../svg'
import { useReactToPrint } from 'react-to-print' 

interface Props { 
    type: string,
    id: string
    setOpen?: any
    setTab?: any
}

function Qrcode(props: Props) {
    const { 
        type,
        id,
        // setOpen,
        // setTab
    } = props

    // const closeHandler = () => {
    //     setOpen(false)
    //     setTab(true) 
    // }

    const componentRef: any = useRef(null)

    const handlePrint = useReactToPrint({
        content: () => componentRef.current as any,
        documentTitle: type, 
    });

    return (
        <Flex w={"full"} flexDir={"column"} alignItems={"center"} >
            <Box ref={componentRef} >
                <Text textAlign={'center'} fontSize={"18px"} fontWeight={"600"} lineHeight={"26px"} color={"#010203"} >{type}</Text>
                <Text textAlign={'center'} fontSize={"sm"} color={"#4F4F4F"} fontWeight={"600"} lineHeight={'20.3px'} >ID Number: <span>{id}</span></Text>
                <Flex w={"full"} alignItems={"center"} justifyItems={"center"} flexDir={"column"} gap={"6"} pb={"2"} pt={"5"} >
                    <QRCode
                        style={{ height: "143px", maxWidth: "100%", width: "143px", zIndex: 20 }}
                        value={id ? id : ""}
                        viewBox={`0 0 256 256`}
                    />
                </Flex>
            </Box>

            <Button onClick={handlePrint} mt={"4"} h={"45px"} gap={"2"} rounded={"5px"} px={"12"} bgColor={"#1F7CFF"} _hover={{ backgroundColor: "#1F7CFF" }} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"white"} >
                <PrintIcon />
                Print QR Code
            </Button>
            <Text width={"full"} maxW={"339.24px"} mt={"2"} fontSize={"12px"} lineHeight={"19px"} color={"#4F4F4F"} textAlign={"center"} >Print the QR codes and stick them on the back of newly added equipment.</Text>
        </Flex>
    )
}

export default Qrcode
