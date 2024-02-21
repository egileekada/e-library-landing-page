import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton
} from "@chakra-ui/react"

interface Props {
    open: any,
    close: any,
    size: any,
    title: any, 
    height?: boolean,
    children: React.ReactNode, 
}

export default function ModalLayout(props: Props) {

    let {
        open,
        close,
        size,
        title, 
        children,
        height, 
    } = props; 


    return (
        <Modal size={size} isCentered scrollBehavior="inside" isOpen={open} onClose={close}>
            <ModalOverlay />
            <ModalContent bgColor="#FFFFFF">
                {title && (
                    <>
                        <ModalHeader color={"#010203"} lineHeight={"23.2px"} textAlign={"center"} fontWeight={"medium"} >{title}</ModalHeader>
                        <ModalCloseButton color={"#000000"} />
                    </>
                )}
                <ModalBody bgColor="#FFFFFF" padding="6" borderBottomRadius="8px" >
                    <div className={size === "full" ? " " : !height ? " overflow-y-auto lg:max-h-[60vh] max-h-auto relative  " : " overflow-y-auto  relative  "} >
                        {children}
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}