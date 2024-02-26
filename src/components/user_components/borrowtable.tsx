import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Box } from '@chakra-ui/react'
// import React from 'react'
import { IBorrowData } from '../../models'
import { dateFormat } from '../../util/dateFormat'
import LoadingAnimation from '../shared_components/loading_animation'

interface Props {
    tableRef?: any,
    data: any
}

function Borrowtable(props: Props) {
    const {
        tableRef,
        data
    } = props

    const Overdue = (item?: boolean) => {
        return (
            <Box mt={"1"} bgColor={"#FFDEDE"} color={"#450000"} h={"fit-content"} fontSize={"14px"} lineHeight={"20.3px"} py={"4px"} px={"12px"} rounded={"20px"} >
                {!item ? "Overdue" : "Damaged"}
            </Box>
        )
    }

    const Returned = (item: boolean) => {
        return (
            <Box mt={"1"} bgColor={"#DEFFF1"} color={"#004530"} h={"fit-content"} fontSize={"14px"} lineHeight={"20.3px"} py={"4px"} px={"12px"} rounded={"20px"} >
                {item ? "Returned" : "Satisfactory"}
            </Box>
        )
    }

    const Borrowed = () => {
        return (
            <Box mt={"1"} bgColor={"#FFF8DE"} h={"fit-content"} w={"fit-content"} fontSize={"14px"} color={"#452500"} lineHeight={"20.3px"} py={"4px"} px={"12px"} rounded={"20px"} >
                Borrowed
            </Box>
        )
    }

    return (
        <LoadingAnimation loading={false} length={data?.length} > 
            <TableContainer>
                <Table ref={tableRef} variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Literature</Th>
                            <Th>Borrowed</Th>
                            <Th>Returned</Th>
                            <Th>Status</Th>
                            <Th>Condition</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((item: IBorrowData, index: number) => {
                            return (
                                <Tr role='button' fontSize={"14px"} key={index} >
                                    <Td>{item?.record?.name}</Td>
                                    <Td>{dateFormat(item?.startDate)}</Td>
                                    <Td>{dateFormat(item?.endDate)}</Td>
                                    <Td >
                                        {item?.status === "BORROWED" && (
                                            <Borrowed />
                                        )}
                                        {item?.status === "RETURNED" && (
                                            <>
                                                {Returned(false)}
                                            </>
                                        )}
                                        {item?.status === "OVERDUE" && (
                                            <>
                                                {Overdue(false)}
                                            </>
                                        )}
                                    </Td>
                                    <Td>-</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </LoadingAnimation>
    )
}

export default Borrowtable
