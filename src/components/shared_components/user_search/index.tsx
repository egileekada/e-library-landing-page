import React, { useState } from 'react'
import InputComponent from '../custom_input'
import { IUserData } from '../../../models'
import { useQuery } from 'react-query'
import actionService from '../../../connections/getdataaction'
import { Box, Flex, Text } from '@chakra-ui/react'
import { SearchIcon } from '../svg'
import LoadingAnimation from '../loading_animation'

interface Props {
    setuserInfo: (by: IUserData) => void
    userInfo: IUserData
}

function UserSearch(props: Props) {
    const {
        setuserInfo
     } = props

    const [data, setData] = useState([] as Array<IUserData>)

    const [search, setsearch] = useState("")
    const [show, setShow] = useState(false)

    const { isLoading, isRefetching } = useQuery(['usersearch', search], () => actionService.getservicedata(`/user/search?keyword=${search}`,
        {
            page: 1,
            limit: 60
        }), {
        onError: (error: any) => {
            console.log(error);
        },
        onSuccess: (data: any) => {
            setData(data?.data?.data);
        }
    })

    const changeHandler =(item: IUserData)=> {
        setuserInfo(item)
        setsearch(item?.name)
        setShow(false)
    }

    const searchHandler =(item: string)=> {
        setsearch(item)
        setShow(true)
    }

    return (
        <Box w={"full"} pos={"relative"} >
            <InputComponent value={search ? search : ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchHandler(e.target.value)} type={'text'} left={true} leftIcon={<SearchIcon />} placeholder="Search for user by name" />
            {show && (
                <Flex w={"full"} bgColor={"white"} maxH={"150px"} position={"absolute"} top={"50px"}  rounded={"md"} zIndex={"10"} >
                    <LoadingAnimation loading={isLoading} refeching={isRefetching} length={data?.length} >
                        <Box width={"full"} py={"2"} px={"6"}overflowY={"auto"}  shadow={"xl"} >
                            {data?.map((item: IUserData, index: number) => {
                                return(
                                    <Flex onClick={()=> changeHandler(item)} key={index} flexDir={"column"} as={"button"} py={"2"} px={""} borderBottomWidth={"1px"} textAlign={"left"} w={"full"} >
                                        <Text>{item?.name}</Text>
                                        <Text>{item?.email}</Text>
                                    </Flex>
                                )
                            })}
                        </Box>
                    </LoadingAnimation>
                </Flex>
            )}
        </Box>
    )
}

export default UserSearch
