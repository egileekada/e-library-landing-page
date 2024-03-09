import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import actionService from '../../connections/getdataaction'
import { focusManager, useQuery } from 'react-query'
import { IPartner } from '../../models'
import LoadingAnimation from '../../components/shared_components/loading_animation'
import Tiles from './tiles'

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
        <Flex height={"100vh"} w={"full"} >
            <Box pos={"fixed"}  opacity={"30%"} inset={"0px"} bgColor={"#CACAFC"} zIndex={"10"} />
            <Image pos={"fixed"} inset={"0px"} zIndex={"0"} src='map.svg' alt='map' />
            <LoadingAnimation loading={isLoading} >
                <Flex zIndex={"20"} flexDirection={"column"} w={"full"} py={"6"} overflowY={"auto"} >
                    <Text color={"#000096"} textAlign={"center"} fontSize={"40px"} fontWeight={"700"} >NDDC Global Resource Partners</Text>
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
                    {/* <Flex pt={"6"} w={"full"} px={"12"} gap={"5"} flexDirection={"column"}  >
                        {data?.map((item: IPartner, index: number) => {
                            return (
                                <Flex key={index} rounded={"20px"} bgColor={"#E3E3FC"} w={"full"} justifyContent={"space-between"} px={"8"} py={"3"} >
                                    <Flex gap={"2"} alignItems={"center"} >
                                        <Box h={"40px"} w={"auto"} >
                                            <Image w={"auto"} h={"40px"} rounded={"12px"} src={item?.imageUrl} objectFit={"contain"} alt='parnter' />
                                        </Box>
                                        <Text fontSize={"20px"} fontWeight={"600"} lineHeight={"30px"} >{item?.partnerName}</Text>
                                    </Flex>
                                    <a href={item?.partnerResourceUrl} target="_blank" >
                                        <Button h={"45px"} fontWeight={"600"} border="1px solid #000096" width={"fit-content"} rounded={"10px"} bgColor={"#CACAFC"} _hover={{ backgroundColor: "#CACAFC" }} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"#000096"} >
                                            Visit partner webiste
                                        </Button>
                                    </a>
                                </Flex>
                            )
                        })}
                    </Flex> */}
                </Flex>
            </LoadingAnimation>
        </Flex>
    )
}

export default Home
