import { Flex, Text } from '@chakra-ui/react'
import { useState } from 'react';
// import React from 'react'

interface Props { 
    setImage: (by: string) => void
}

function ImageSelector(props: Props) {
    const {
        setImage
    } = props

    const [imageName, setImageName] = useState("");
    // const [image, SetImage] =  useState('');  
    // const [imageFiles, setImageFiles] = useState([] as Array<string>);



    // const handleImage = (e:any) => {  

    //     const files = e.target.files

    //     for (var i = 0; i < files.length; i++) {
    //         const clone = [...imageFiles, files[i]];
    //         setImageFiles(clone); 
    //     }
    // 	if (e.target.files[0]) {
    // 		const filesArray: any = Array.from(e.target.files).map((file) => URL.createObjectURL(file)); 

    // 		setSelectedFiles((prevImages: any) => prevImages.concat(filesArray));
    // 		Array.from(e.target.files).map(
    // 			(file : any) => URL.revokeObjectURL(file) // avoid memory leak
    // 		);
    //     }
    // };

    // function handleRemove(id: any, file: any) {
    //     const newList = selectedFiles.filter((item: any) => item !== id);
    //     const clone = [...imageFiles];
    //     const index = clone.indexOf(file); 
    //     clone.splice(index, 1); 
    //     setImageFiles(clone); 
    //     if(Object.keys(newList).length === 0){                   
    //         setShow(prev => !prev);
    //     }
    //         setSelectedFiles(newList); 
    //   }

    const handleImageChange = (e: any) => {

        const selected = e.target.files[0];
        const TYPES = ["image/png", "image/jpg", "image/jpeg"];
        if (selected && TYPES.includes(selected.type)) {
            setImage(selected)
            setImageName(selected.name);
        } else {
            console.log('Error')
        }
    }

    return (
        <Flex h={"45px"} w={"full"} rounded={"5px"} justifyContent={"center"} alignItems={"center"} borderStyle={"dashed"} borderWidth={"1px"} borderColor={"#ADADAD"}  >

            <label role='button' style={{ width: "100%", height: "45px", borderRadius: "5px", justifyContent: "center", alignItems: "center", display: "flex" }}  >
                <input type="file" onChange={handleImageChange} style={{ display: "none" }} />
                <Text color={imageName ? "name" : "#909090"} lineHeight={"20.3px"} textAlign={"center"} fontSize={"14px"} >{imageName ? imageName : "Click to upload"}</Text>
            </label>
        </Flex>
    )
}

export default ImageSelector
