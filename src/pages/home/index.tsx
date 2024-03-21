import { Button, Flex, Grid, GridItem } from '@chakra-ui/react'
import { useState } from 'react'
import actionService from '../../connections/getdataaction'
import { focusManager, useQuery } from 'react-query'
import { IPartner } from '../../models'
import LoadingAnimation from '../../components/shared_components/loading_animation'
import Tiles from './tiles'
import { Logo } from '../../components/shared_components/svg'

interface Props { }

function Home(props: Props) {
    const { } = props
    const [data, setData] = useState([] as Array<any>)

    focusManager.setFocused(false)

    const { isLoading } = useQuery(['partnertable'], () => actionService.getservicedata(`/partner/filter`,
        {
            // page: page,
            limit: 100,
            // keyword: search ? search : null
        }), {
        onError: (error: any) => {
            console.log(error);

        },
        onSuccess: (data: any) => {
            setData(data?.data?.data);
            console.log(data);

        }
    })

    return (
        <Flex height={"100vh"} w={"full"} flexDirection={"column"} h={"100vh"} >
            <Flex px={"6"} bgColor={"white"} alignItems={"center"} justifyContent={"space-between"} shadow={"lg"} py={"4"} position={"sticky"} top={"0px"} width={"full"} >
                <Flex fontWeight={"600"} fontSize={"xl"} alignItems={"center"} gap={"3"} width={"fit-content"} >
                    <Logo w={"60"} />
                    NDDC
                </Flex>
                <Button h={"45px"} w={"150px"} border={"1px solid #1F7CFF"} gap={"2"} rounded={"5px"} bgColor={"#FFF"} _hover={{ backgroundColor: "#FFF" }} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"#1F7CFF"} >
                    Login
                </Button>
            </Flex>
            {/* <Box pos={"fixed"}  opacity={"30%"} inset={"0px"} bgColor={"#CACAFC"} zIndex={"10"} />
            <Image pos={"fixed"} inset={"0px"} zIndex={"0"} src='map.svg' alt='map' /> */}
            <LoadingAnimation loading={isLoading} >
                <Flex zIndex={"20"} flexDirection={"column"} w={"full"} py={"6"} overflowY={"auto"} >
                    {/* <Text color={"#000096"} textAlign={"center"} fontSize={"40px"} fontWeight={"700"} >NDDC Global Resource Partners</Text> */}
                    <Flex justifyContent={"center"} pt={"8"} >
                        <Grid templateColumns='repeat(4, 1fr)' gap={4} pt={"6"} w={["full", "full", "full", "full", "85%", "75%", "70%"]} px={"12"} py={"4"}>
                            {data?.map((item: IPartner, index: number) => {
                                return (
                                    <GridItem key={index} maxW={"400px"} w={"full"} borderWidth={"0.5px"} rounded={"10px"} bgColor={"#FCFCFC"} borderColor={"#BDBDBD"} >
                                        <Tiles id={item?.id} imageUrl={item?.imageUrl} partnerName={item?.partnerName} partnerResourceName={item?.partnerResourceName} partnerResourceUrl={item?.partnerResourceUrl} pinned={item?.pinned} />
                                    </GridItem>
                                )
                            })}
                        </Grid>
                    </Flex>
                </Flex>
            </LoadingAnimation>
        </Flex>
    )
}

export default Home
