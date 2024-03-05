import { Box, Flex, Image, Text, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { RightArrow } from '../../components/shared_components/svg'
import { focusManager, useQuery } from 'react-query'
import actionService from '../../connections/getdataaction'
import LoadingAnimation from '../../components/shared_components/loading_animation'
// import Borrowtable from '../../components/user_components/borrowtable'
// import { dateFormat } from '../../util/dateFormat'
import { useNavigate } from 'react-router-dom'
import { ILibrary } from '../../models'
import Recordborrowhistory from '../../components/library_components/recordborrowhistory'
import Returnbtn from '../../components/library_components/returnbtn' 

interface Props { }

function LibraryInfo(props: Props) {
    const { } = props

    const toast = useToast()
    const [data, setData] = useState({} as ILibrary)

    const userId = localStorage.getItem("library")

    const navigate = useNavigate()

    focusManager.setFocused(false)

    // const param

    const { isLoading, isRefetching } = useQuery(['libraryinfo', userId], () => actionService.getservicedata(`/record/record/${Number(userId)}`), {
        onError: (error: any) => {
            toast({
                status: "error",
                title: "Error occured",
            });
            console.log(error);

        },
        onSuccess: (data: any) => {
            setData(data?.data?.data);
        }
    })

    useEffect(() => {
        if (!userId) {
            navigate("/dashboard/user")
        }
    }, [])



    const status = (item: any) => {
        if (item === "AVAILABLE") {
            return (
                <Flex bgColor={"#DEFFEB"} h={"fit-content"} gap={"2"} mt={"1"} rounded={"20px"} px={"12px"} py={"4px"} justifyContent={"center"} alignItems={"center"} >
                    <Text fontSize={"14px"} lineHeight={"20.3px"} color={"#00451C"} >Available</Text>
                </Flex>
            )
        } else {
            return (
                <Flex bgColor={"#FFF8DE"} h={"fit-content"} mt={"1"} rounded={"20px"} px={"12px"} py={"4px"} justifyContent={"center"} alignItems={"center"} >
                    <Text fontSize={"14px"} lineHeight={"20.3px"} color={"#00451C"} >Borrowed</Text>
                </Flex>
            )
        }
    }

    return (
        <LoadingAnimation loading={isLoading} refeching={isRefetching} >
            <Flex width={"full"} height={"full"} flexDir={"column"} pt={"8"} pb={"4"} >
                <Flex gap={"2px"} alignItems={"center"} >
                    <Text role='button' onClick={() => navigate("/dashboard/library")} color={"#114EA3"} lineHeight={"19.36px"} >Library</Text>
                    <RightArrow />
                    <Text color={"#515151"} lineHeight={"19.36px"} >{data?.name}</Text>
                </Flex>
                <Flex gap={"8"} pt={"10"} >
                    <Box width={"231px"} h={"225px"} rounded={"16px"} bgColor={"grey"} >
                        <Image src={data?.thumbnail} alt='image' h={"full"} w={"full"} objectFit={"cover"} rounded={"16px"} />
                    </Box>
                    <Flex flexDir={"column"} >
                        <Flex gap={"3"} pt={"6"} >
                            <Text fontSize={"40px"} lineHeight={"48.41px"} fontWeight={"600"} >{data?.name}</Text>
                            {status(data?.status)}

                        </Flex>
                        <Text fontSize={"16px"} mt={"3"} lineHeight={"32.4px"} >by {data?.author} -  {data?.publicationYear ?  data?.publicationYear : data?.projectYear}</Text>

                        <Box mt={"auto"} > 
                            <Returnbtn {...data} />
                        </Box>
                    </Flex>
                </Flex>
                <Flex w={"full"} borderBottomWidth={"0.5px"} gap={"2"} py={"6"} flexDir={"column"} borderColor={"#BDBDBD"} >
                    {data?.IDNumber && (
                        <Text fontSize={"14px"} fontWeight={"600"} lineHeight={"20.3px"} >ID Number: <span style={{ fontWeight: "400" }} >{data?.IDNumber}</span></Text>
                    )}
                    {data?.ISBN && (
                        <Text fontSize={"14px"} fontWeight={"600"} lineHeight={"20.3px"} >ISBN: <span style={{ fontWeight: "400" }} >{data?.ISBN}</span></Text>
                    )}
                </Flex>
                <Flex w={"full"} borderBottomWidth={"0.5px"} gap={"2"} py={"6"} flexDir={"column"} color={"#4F4F4F"} borderColor={"#BDBDBD"} >
                    <Text fontSize={"14px"} lineHeight={"20.3px"} fontWeight={"600"} color={"#4F4F4F"} >Description</Text>
                    <Text fontSize={"16px"} lineHeight={"24px"} fontWeight={"400"} color={"#333333"} >{data?.description}</Text>
                    <Text fontSize={"14px"} fontWeight={"600"} lineHeight={"20.3px"} >Category: <span style={{ fontWeight: "400" }} >{data?.category}</span></Text>
                    <Text fontSize={"14px"} fontWeight={"600"} lineHeight={"20.3px"} >Author: <span style={{ fontWeight: "400" }} >{data?.author}</span></Text>
                    <Text fontSize={"14px"} fontWeight={"600"} lineHeight={"20.3px"} >Number Of Copies: <span style={{ fontWeight: "400" }} >{data?.count}</span></Text>
                </Flex>
                <Flex w={"full"} borderBottomWidth={"0.5px"} gap={"2"} py={"6"} flexDir={"column"} color={"#4F4F4F"} borderColor={"#BDBDBD"} >
                    <Recordborrowhistory info={data} data={data?.Borrowing ? data?.Borrowing : []} />
                </Flex>
            </Flex>

        </LoadingAnimation>
    )
}

export default LibraryInfo

