import { useState } from 'react'
import { MoreIcon } from '../svg'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Gadgetform from '../../gadget_compnonents/gadgetform'
import ModalLayout from '../modal_layout'
import { ICreateGadget } from '../../../models'
import Equipmentform from '../../equipment_compnonents/equipmentform' 
import Qrcode from '../qrcode'

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

    const clickHandler = (item: boolean) => {
        setTab(item)
        setOpen(true)
    }

    const closeHandler = () => {
        setOpen(false)
        setTab(true) 
    } 

    return (
        <Box>

            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton bgColor={"transparent"} isActive={isOpen} as={Button}>
                            <MoreIcon />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => clickHandler(false)}>
                                <Text lineHeight={"19.36px"} fontWeight={"500"} >Edit {name}</Text>
                            </MenuItem>
                            <MenuItem onClick={() => clickHandler(true)} >
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
                    <Qrcode setOpen={setOpen} setTab={setTab} type={data?.type ? data?.type : ""} id={data?.id ? data?.id : ""} />
                )}
            </ModalLayout>
        </Box>
    )
}

export default MoreOption
