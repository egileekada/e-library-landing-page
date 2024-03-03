import { Select, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// import React, { useEffect } from 'react'

interface Props {
    touch?: any,
    error?: any
    [x: string]: any;
}

function Yearselector(props: Props) {
    const {
        touch,
        error,
        ...rest
    } = props

    const yearsArray: string[] = [];
    const currentYear: number = new Date().getFullYear();

    for (let year = currentYear; year >= 1800; year--) {
        yearsArray.push(year?.toString());
    }

    return (
        <> 
            <Select
                name="language"
                {...rest}
                fontSize={"14px"} bgColor="#FCFCFC" borderColor="#BDBDBD" _hover={{ borderColor: "#BDBDBD" }} _focus={{ backgroundColor: "#FCFCFC" }} focusBorderColor="#BDBDBD" height={"45px"}>
                <option value={""} >Select Year</option>
                {yearsArray?.map((item: string, index: number) => {
                    return (
                        <option key={index} >{item}</option>
                    )
                })}
            </Select>

            {touch && error && (
                    <Text as={motion.p}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }} color="#E84545" fontWeight="600" fontSize="xs" mt="3px" textAlign="left" >{error}</Text>
                )
            }
        </>
    )
}

export default Yearselector
