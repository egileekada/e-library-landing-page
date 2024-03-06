import { Button } from '@chakra-ui/react' 
import { IPartner } from '../../models'
import ModalLayout from '../shared_components/modal_layout'
import Portalform from './portalform'
import { useState } from 'react'

interface Props { 
    data: IPartner
}

function Updateform(props: Props) {
    const { 
        data
    } = props 
    
    const [open, setOpen] = useState(false)

    return (
        <> 
            <Button onClick={()=> setOpen(true)} h={"45px"} gap={"2"} rounded={"5px"} width={"full"} mt={"4"} fontWeight={"500"} fontSize={"14px"} bgColor={"#FFF"} border={"1px solid #1F7CFF"} _hover={{ backgroundColor: "#FFF" }} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"#1F7CFF"} >
                Edit Partner
            </Button>

            <ModalLayout size={"md"} open={open} close={setOpen} title={"Create Partner Portal"} >
                <Portalform data={data} edit={true} close={setOpen} />
            </ModalLayout>
        </>
    )
}

export default Updateform
