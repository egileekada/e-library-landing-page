// import React from 'react'

import { Button } from "@chakra-ui/react"
import { AddIcon } from "../shared_components/svg"
import ModalLayout from "../shared_components/modal_layout"
import { useState } from "react"
import Portalform from "./portalform"

interface Props {}

function Portalbtn(props: Props) {
    const {} = props
    
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={()=> setOpen(true)} h={"45px"} gap={"2"} rounded={"5px"} px={"7"} bgColor={"#1F7CFF"} _hover={{backgroundColor: "#1F7CFF"}} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"white"} >
                <AddIcon />
                Create Partner Portal
            </Button>
            <ModalLayout size={"md"} open={open} close={setOpen} title={"Create Partner Portal"} >
                <Portalform close={setOpen} />
            </ModalLayout>
        </>
    )
}

export default Portalbtn
