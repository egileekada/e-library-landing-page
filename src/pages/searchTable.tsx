import { Grid, GridItem, useToast } from '@chakra-ui/react';
import { useState } from 'react' 
import { focusManager, useQuery } from 'react-query';
import LoadingAnimation from '../components/shared_components/loading_animation';
import actionService from '../connections/getdataaction';
import { IPartner } from '../models';
import filterdata from '../store/filterdata';
import Tiles from './home/tiles';

interface Props {
    page: number;
    setPage: (by: number) => void;
    limit: number;
    setLimit: (by: number) => void;
    setTotal: (by: number) => void;
}

function Searchtable(props: Props) {
    const {
        limit,
        page,
        setPage,
        setLimit,
        setTotal
    } = props

    const toast = useToast()

    const { search } = filterdata((state) => state); 
    const [data, setData] = useState([] as Array<IPartner>)

    focusManager.setFocused(false)

    const { isLoading, isRefetching } = useQuery(['partnertable', search, page, limit], () => actionService.getservicedata(`${"/partner"}`,
        {
            page: page,
            limit: limit,
            keyword: search ? search : null
        }), {
        onError: (error: any) => {
            toast({
                status: "error",
                title: "Error occured",
            });
            console.log(error);
        },
        onSuccess: (data: any) => {

            console.log(data?.data?.total);
            
            setPage(data?.data?.page)
            setLimit(data?.data?.limit)
            setTotal(data?.data?.total)
            setData(data?.data?.data);
        }
    })

    return (
        <>
            <LoadingAnimation loading={isLoading} refeching={isRefetching} >
                <Grid templateColumns='repeat(3, 1fr)' gap={4} px={"12"} py={"4"}>
                    {data?.map((item: IPartner, index: number) => {
                        return (
                            <GridItem key={index} w={"full"} borderWidth={"0.5px"} rounded={"10px"} bgColor={"#FCFCFC"} borderColor={"#BDBDBD"} >
                                <Tiles id={item?.id} imageUrl={item?.imageUrl} partnerName={item?.partnerName} partnerResourceName={item?.partnerResourceName} partnerResourceUrl={item?.partnerResourceUrl} pinned={item?.pinned} />
                            </GridItem>
                        )
                    })}
                </Grid>
            </LoadingAnimation> 
        </>
    )
}

export default Searchtable
