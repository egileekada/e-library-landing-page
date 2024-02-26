import { Box, Checkbox, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import { useQuery } from 'react-query'; 
import { useState } from 'react';
import { IUserData } from '../../models';
import LoadingAnimation from '../shared_components/loading_animation'; 
import actionService from '../../connections/getdataaction';
import filterdata from '../../store/filterdata';

interface Props {
    page: number;
    setPage: (by: number) => void;
    limit: number;
    setLimit: (by: number) => void;
    setTotal: (by: number) => void;
}

function Usertable(props: Props) {
    const {
        limit,
        page,
        setPage,
        setLimit,
        setTotal
    } = props

    const [data, setData] = useState([] as any)
    const toast = useToast()
     
    const { search } = filterdata((state) => state);

    const { isLoading, isRefetching } = useQuery(['usertable', search, page, limit], () => actionService.getservicedata(search ? `/user/search?keyword=${search}` : "/user",
        {
            page: page,
            limit: limit
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

    return (
        <LoadingAnimation loading={isLoading} refeching={isRefetching} length={data?.length} >
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th><Checkbox size={"lg"} /></Th>
                            <Th>ID</Th>
                            <Th>Image</Th>
                            <Th>Name</Th>
                            <Th>Role</Th>
                            <Th>Staff ID</Th>
                            <Th>Email</Th>
                            <Th>Phone No.</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((item: IUserData, index: number) => {
                            return (
                                <Tr fontSize={"14px"} key={index} >
                                    <Td><Checkbox size={"lg"} /></Td>
                                    <Td>{item?.id}</Td>
                                    <Td>
                                        <Box w={"48px"} h={"48px"} rounded={"full"} bgColor={"grey"} />
                                    </Td>
                                    <Td>{item?.name?.length > 12 ? item?.name.slice(0, 12)+"..." : item?.name}</Td>
                                    <Td>{item?.staffId ? "Staff" : "Guest"}</Td>
                                    <Td>{item?.staffId ? item?.staffId : "Guest"}</Td>
                                    <Td>{item?.email?.length > 12 ? item?.email.slice(0, 12)+"..." : item?.email}</Td>
                                    <Td>{item?.phone}</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </LoadingAnimation>
    )
}

export default Usertable
