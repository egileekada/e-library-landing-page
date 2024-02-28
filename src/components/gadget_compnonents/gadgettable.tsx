import { Box, Checkbox, Flex, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import { focusManager, useQuery } from 'react-query';
import { useState } from 'react';
import { IGadgetData } from '../../models';
import LoadingAnimation from '../shared_components/loading_animation';
import actionService from '../../connections/getdataaction';
import filterdata from '../../store/filterdata'; 
import MoreOption from '../shared_components/more_options';
// import { useNavigate } from 'react-router-dom';

interface Props {
    tableRef: any
    page: number;
    setPage: (by: number) => void;
    limit: number;
    setLimit: (by: number) => void;
    setTotal: (by: number) => void;
}

function GadgetTable(props: Props) {
    const {
        tableRef,
        limit,
        page,
        setPage,
        setLimit,
        setTotal
    } = props

    const [data, setData] = useState([] as any)
    const toast = useToast() 

    focusManager.setFocused(false)

    const { search, filter } = filterdata((state) => state);

    const { isLoading, isRefetching } = useQuery(['gadgettable', search, page, limit, filter?.status], () => actionService.getservicedata(`/hardware/gadget`,
        {
            page: page,
            limit: limit,
            manufacturer: search, 
            state: filter.status
        }), {
        onError: (error: any) => {
            toast({
                status: "error",
                title: "Error occured",
            });
            console.log(error);

        },
        onSuccess: (data: any) => {
            setPage(data?.data?.page) 
            setLimit(data?.data?.limit)
            setTotal(data?.data?.total)
            setData(data?.data?.data);
        }
    }) 

    const statuscomponent =(item: string)=> {
        if(item === "ACTIVE"){
            return(
                <Flex width={"180px"} rounded={"10px"} color={"#1B4332"} height={"30px"} lineHeight={"16.94px"} fontSize={"14px"} justifyContent={"center"} alignItems={"center"} bgColor={"#A7D5C0"} >
                    Active
                </Flex>
            )
        } else { 
            return(
                <Flex width={"180px"} rounded={"10px"} color={"#3F4010"} height={"30px"} lineHeight={"16.94px"} fontSize={"14px"} justifyContent={"center"} alignItems={"center"} bgColor={"#E7DD84"} >
                    Temporarily disabled
                </Flex>
            )
        }
    }

    return (
        <LoadingAnimation loading={isLoading} refeching={isRefetching} length={data?.length} >
            <TableContainer>
                <Table ref={tableRef} variant='simple'>
                    <Thead>
                        <Tr>
                            <Th><Checkbox size={"lg"} /></Th>
                            <Th>ID</Th>
                            <Th>Image</Th>
                            <Th>Equipment</Th>
                            <Th>Manufacturer</Th>
                            <Th>Quantity</Th>
                            <Th>Status</Th> 
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((item: IGadgetData, index: number) => {
                            return (
                                <Tr fontSize={"14px"} key={index} >
                                    <Td><Checkbox size={"lg"} /></Td>
                                    <Td>{item?.id?.length > 12 ? item?.id.slice(0, 12) + "..." : item?.id}</Td>
                                    <Td>
                                        {item?.picture && (
                                            <Box w={"48px"} h={"48px"} borderWidth={"3px"} rounded={"4px"} > 
                                                <Image w={"full"} h={"full"} rounded={"4px"} src={item?.picture} objectFit={"cover"} alt='image' />
                                            </Box>
                                        )}

                                        {!item?.picture && (
                                            <Box w={"48px"} h={"48px"} rounded={"4px"} bgColor={"grey"} />
                                        )}
                                    </Td> 
                                    <Td>{item?.type?.length > 12 ? item?.type.slice(0, 12) + "..." : item?.type}</Td>
                                    <Td>{item?.manufacturer?.length > 12 ? item?.manufacturer.slice(0, 12) + "..." : item?.manufacturer}</Td>
                                    <Td>{item?.count}</Td>
                                    <Td>
                                        <Flex gap={"3"} alignItems={"center"} >
                                            {statuscomponent(item?.state)}
                                            <MoreOption name='Gadget' data={item} />
                                        </Flex>
                                    </Td> 
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer> 
        </LoadingAnimation>
    )
}

export default GadgetTable
