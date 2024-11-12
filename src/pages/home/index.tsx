import { Box, Flex, Grid, GridItem, Spinner, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { IPartner } from '../../models'
import LoadingAnimation from '../../components/shared_components/loading_animation'
import Tiles from './tiles'
import { Logo } from '../../components/shared_components/svg'
import PinData from '../pinneddata'
// import InfiniteScrollerComponent from '../../util/infiniteScrollerComponent'
import { useQuery } from 'react-query'
import { cleanup } from '../../util/cleanup'
import actionService from '../../connections/getdataaction'
import Pagination from '../../components/shared_components/pagination'

interface Props { }

function Home(props: Props) {
    const { } = props
    const [data, setData] = useState([] as Array<any>)
    const [loading, setLoading] = useState(false)


    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalItem, setTotal] = useState(0)
    const [results, setDataInfo] = useState([] as Array<IPartner>)

    const toast = useToast()

    // const { results, isLoading, ref, isRefetching } = InfiniteScrollerComponent({ url: `/partner/filter`, limit: 20, filter: "id" })

    const { isLoading, isRefetching } = useQuery(['partner', page, limit], () => actionService.getservicedata(`/partner/filter`,
        {
            ...cleanup({
                page: page,
                limit: limit
            }),
        }), {
        onError: () => {
            toast({
                status: "error",
                title: "Error occured",
            });
        },

        onSuccess: (data: any) => {
            setTotal(data?.data?.total)
            setDataInfo(data?.data?.data);
        }

    })

    return (
        <Flex height={"100vh"} w={"full"} flexDirection={"column"} h={"100vh"} >
            <Flex px={"6"} bgColor={"white"} alignItems={"center"} justifyContent={"space-between"} shadow={"lg"} py={"4"} position={"sticky"} top={"0px"} width={"full"} >
                <Flex fontWeight={"600"} fontSize={"xl"} alignItems={"center"} gap={"3"} width={"fit-content"} >
                    <Logo w={"60"} />
                    NDDC
                </Flex>
            </Flex>
            <Flex zIndex={"20"} flexDirection={"column"} w={"full"} py={"6"} overflowY={"auto"} >
                {/* <Text color={"#000096"} textAlign={"center"} fontSize={"40px"} fontWeight={"700"} >NDDC Global Resource Partners</Text> */}
                <LoadingAnimation loading={isLoading || loading} refeching={isRefetching} >
                    <Flex justifyContent={"center"} pt={"8"} >
                        <Grid templateColumns='repeat(4, 1fr)' gap={4} pt={"6"} w={["full", "full", "full", "full", "85%", "75%", "70%"]} px={"12"} py={"4"}>
                            {data?.map((item: IPartner, index: number) => {
                                if (page === 1) {
                                    return (
                                        <GridItem key={index} w={"full"} borderWidth={"0.5px"} rounded={"10px"} bgColor={"#FCFCFC"} borderColor={"#BDBDBD"} >
                                            <Tiles id={item?.id} imageUrl={item?.imageUrl} partnerName={item?.partnerName} partnerResourceName={item?.partnerResourceName} partnerResourceUrl={item?.partnerResourceUrl} pinned={item?.pinned} />
                                        </GridItem>
                                    )
                                }
                            })}
                            {results?.map((item: IPartner, index: number) => {
                                // if (results.length === index + 1) {
                                //     return (
                                //         <GridItem key={index} w={"full"} borderWidth={"0.5px"} rounded={"10px"} bgColor={"#FCFCFC"} borderColor={"#BDBDBD"} ref={ref} >
                                //             <Tiles id={item?.id} imageUrl={item?.imageUrl} partnerName={item?.partnerName} partnerResourceName={item?.partnerResourceName} partnerResourceUrl={item?.partnerResourceUrl} pinned={item?.pinned} />
                                //         </GridItem>
                                //     )
                                // } else {
                                return (
                                    <GridItem key={index} w={"full"} borderWidth={"0.5px"} rounded={"10px"} bgColor={"#FCFCFC"} borderColor={"#BDBDBD"} >
                                        <Tiles id={item?.id} imageUrl={item?.imageUrl} partnerName={item?.partnerName} partnerResourceName={item?.partnerResourceName} partnerResourceUrl={item?.partnerResourceUrl} pinned={item?.pinned} />
                                    </GridItem>
                                )
                                // }
                            })}

                            {isRefetching && (
                                <GridItem display={"flex"} justifyContent={"center"} alignItems={"center"} >
                                    <Spinner />
                                </GridItem>
                            )}
                        </Grid>
                    </Flex>
                </LoadingAnimation>
                <Box mt={"auto"} pt={"12"} px={"6"} >
                    <Pagination setLimit={setLimit} setPage={setPage} setTotal={setTotal} limit={limit} page={page} totalItem={totalItem} />
                </Box>
            </Flex>
            <PinData setLoading={setLoading} setdata={setData} />
        </Flex>
    )
}

export default Home
