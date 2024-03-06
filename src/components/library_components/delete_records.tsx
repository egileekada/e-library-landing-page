import { Box, Button, Flex, Image, Text, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import ModalLayout from '../shared_components/modal_layout'
import { useDeleteRecordCallback } from '../../connections/useaction'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

interface Props { 
    id?: string | number
}

function DeleteRecords(props: Props) {
    const { 
        id
    } = props

    const [open, setOpen] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()

    const { handleDeleteRecord } = useDeleteRecordCallback()

    //API call to handle adding user
    const deleteMutation = useMutation(async () => {

        let response = await handleDeleteRecord(id ? id : "");
 

        if (response?.status === 201 || response?.status === 200) {

            toast({
                title: response?.data?.message,
                status: "success",
                duration: 3000,
                position: "top",
            }); 

            navigate("/dashboard/library")

            setOpen(false)

            return response;
        } else if (response?.data?.statusCode === 400) {
            toast({
                title: response?.data?.message,
                status: "error",
                duration: 3000,
                position: "top",
            });
            return
        }
    });

    const submit = async () => { 

        deleteMutation.mutateAsync()
            .catch(() => {
                toast({
                    title: "Something went wrong",
                    status: "error",
                    duration: 3000,
                    position: "top",
                });
            });

    }

    return (
        <>
            <Box onClick={() => setOpen(true)} w={"20px"} as='button' >
                <Image src='/trash.png' alt='trash' />
            </Box>
            <ModalLayout size={"md"} open={open} close={setOpen} title={"Delete Records"} >
                <Flex w={"full"} flexDir={"column"} alignItems={"center"} >
                    <Image src='/trash.png' width={"100px"} alt='trash' />
                    <Text fontWeight={"500"} mt={"4"} >Are You sure You want to delete this Record?</Text>
                    <Flex justifyContent={'center'} flexDir={"column"} width={'100%'} gap={"3"} mt={"8"} >
                        <Button variant={'outline'} outlineColor={'#1F7CFF'} borderWidth={'0px'} width='100%' height={'32px'} color='#1F7CFF' onClick={() => setOpen(false)} >Cancel</Button>
                        <Button onClick={()=> submit()} isLoading={deleteMutation?.isLoading} isDisabled={deleteMutation?.isLoading} variant={'solid'} bg='red' width='100%' height={'40px'} color='white' >Delete</Button>
                    </Flex>
                </Flex>
            </ModalLayout>
        </>
    )
}

export default DeleteRecords 