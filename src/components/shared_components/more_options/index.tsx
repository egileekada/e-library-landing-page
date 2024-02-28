import { useRef, useState } from 'react'
import { MoreIcon, PrintIcon } from '../svg'
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Gadgetform from '../../gadget_compnonents/gadgetform'
import ModalLayout from '../modal_layout'
import { ICreateGadget } from '../../../models'
import Equipmentform from '../../equipment_compnonents/equipmentform'
import QRCode from 'react-qr-code'
import { useReactToPrint } from 'react-to-print'

interface Props {
    name?: string,
    data?: ICreateGadget
}

function MoreOption(props: Props) {
    const {
        name,
        data
    } = props

    const [open, setOpen] = useState(false) 
    const [tab, setTab] = useState(false)

    const clickHandler = () => {
        setTab(true)
        setOpen(true)
    }

    const closeHandler = () => {
        setOpen(false)
        setTab(true) 
    }

    const componentRef: any = useRef(null)

    const handlePrint = useReactToPrint({
        content: () => componentRef.current as any,
        documentTitle: data?.type,
        onAfterPrint: () => closeHandler()
    });

    return (
        <Box>

            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton bgColor={"transparent"} isActive={isOpen} as={Button}>
                            <MoreIcon />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => setOpen(true)}>
                                <Text lineHeight={"19.36px"} fontWeight={"500"} >Edit {name}</Text>
                            </MenuItem>
                            <MenuItem onClick={() => clickHandler()} >
                                <Text lineHeight={"19.36px"} fontWeight={"500"} >Qr_code</Text>
                            </MenuItem>
                            <MenuItem isDisabled={true} >
                                <Text lineHeight={"19.36px"} fontWeight={"500"} >Delete {name}</Text>
                            </MenuItem>
                        </MenuList>
                    </>
                )}
            </Menu>

            <ModalLayout size={"md"} open={open} close={closeHandler} title={tab ? "Add Equipment" : "Add Gadget"} >
                {!tab && (
                    <>
                        {name === "Equipment" && (
                            <Equipmentform edit={true} data={data} close={closeHandler} />
                        )}
                        {name === "Gadget" && (
                            <Gadgetform edit={true} data={data} close={closeHandler} />
                        )}
                    </>
                )}
                {tab && (
                    <Flex w={"full"} flexDir={"column"} alignItems={"center"} >
                        <Box ref={componentRef} >
                            <Text textAlign={'center'} fontSize={"18px"} fontWeight={"600"} lineHeight={"26px"} color={"#010203"} >{data?.type}</Text>
                            <Text textAlign={'center'} fontSize={"sm"} color={"#4F4F4F"} fontWeight={"600"} lineHeight={'20.3px'} >ID Number: <span>{data?.id}</span></Text>
                            <Flex w={"full"} alignItems={"center"} justifyItems={"center"} flexDir={"column"} gap={"6"} pb={"2"} pt={"5"} >
                                <QRCode
                                    style={{ height: "143px", maxWidth: "100%", width: "143px", zIndex: 20 }}
                                    value={data?.id ? data?.id : ""}
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
                )}
            </ModalLayout>
        </Box>
    )
}

export default MoreOption
