import { Box, Button, Flex, Select, Text, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import InputComponent from '../shared_components/custom_input'
import ImageSelector from '../shared_components/image_selector'
import { useAddEquipmentCallback, useUpdateEquipmentCallback, useUploaderCallback } from '../../connections/useaction'
import { useMutation, useQueryClient } from 'react-query';
import { ICreateEquipment } from '../../models';
import { useEffect, useState } from 'react';

interface Props {
    edit?: boolean,
    data?: ICreateEquipment
    close: (by: boolean) => void
}

function Equipmentform(props: Props) {
    const {
        edit,
        data,
        close
    } = props


    console.log(data);


    const queryClient = useQueryClient()

    const toast = useToast()
    const { handleAddEquipment } = useAddEquipmentCallback();
    const { handleUpdateEquipment } = useUpdateEquipmentCallback();
    const { handleUploader } = useUploaderCallback()
    const [imageFile, setImageFile] = useState("");
    const loginSchema = yup.object({
        type: yup.string().required('required'),
        manufacturer: yup.string().required('required'),
        count: yup.number().required('required'),
        state: yup.string().required('required'),
    })

    // formik
    const formik = useFormik({
        initialValues: {
            type: "",
            picture: "",
            count: 0,
            state: ""
        },
        validationSchema: loginSchema,
        onSubmit: () => { },
    });

    //API call to handle adding user
    const addEquipmentMutation = useMutation(async (formData: ICreateEquipment) => {
        const response = await handleAddEquipment(formData);

        if (response?.status === 201 || response?.status === 200) {

            toast({
                title: response?.data?.message,
                status: "success",
                duration: 3000,
                position: "top",
            });

            queryClient.invalidateQueries(['equipmenttable'])

            return response;
        } else if (response?.data?.statusCode === 400) {
            toast({
                title: response?.data?.message,
                status: "error",
                duration: 3000,
                position: "top",
            });
            return
        }
    });


    useEffect(() => {
        if (edit) {
            console.log(data);

            formik.setFieldValue("count", data?.count)
            formik.setFieldValue("state", data?.state)
            formik.setFieldValue("type", data?.type)

            setImageFile(data?.picture ? data?.picture : "")

        }
    }, [])


    //API call to handle adding user
    const updateEquipmentMutation = useMutation(async (formData: { count: number; state: string; }) => {
        const response = await handleUpdateEquipment(formData, data?.id ? data?.id : "");

        console.log(response?.data?.message);

        if (response?.status === 201 || response?.status === 200) {

            toast({
                title: response?.data?.message,
                status: "success",
                duration: 3000,
                position: "top",
            });

            queryClient.invalidateQueries(['gadgettable'])

            return response;
        } else if (response?.data?.statusCode === 400) {
            toast({
                title: response?.data?.message,
                status: "error",
                duration: 3000,
                position: "top",
            });
            return
        }
    });

    //API call to handle adding user
    const uploaderMutation = useMutation(async (userdata: ICreateEquipment) => {

        let formData = new FormData()
        formData.append("file", imageFile)

        const response = await handleUploader(formData, imageFile);

        if (response?.status === 201 || response?.status === 200) {

            addEquipmentMutation.mutateAsync({ ...userdata, picture: response?.data?.data }, {
                onSuccess: (data: any) => {
                    if (data) {
                        close(false)
                    }
                },
            })
                .catch(() => {
                    toast({
                        title: "Something went wrong",
                        status: "error",
                        duration: 3000,
                        position: "top",
                    });
                });


            return response;
        } else if (response?.data?.statusCode === 400) {
            toast({
                title: response?.data?.message,
                status: "error",
                duration: 3000,
                position: "top",
            });
            return
        }
    });


    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const equipmentData = {
            type: formik.values.type,
            state: formik.values.state,
            count: Number(formik.values.count),
        };

        const updateData = {
            state: formik.values.state,
            count: Number(formik.values.count),
        };

        if (!edit) {
            if (!formik.dirty || !formik.isValid) {
                toast({
                    title: "You have to fill in the form to continue",
                    status: "error",
                    duration: 3000,
                    position: "top",
                });
                return;
            } else if (!imageFile) {
                toast({
                    title: "Add an image",
                    status: "error",
                    duration: 3000,
                    position: "top",
                });
                return;
            }


            uploaderMutation.mutateAsync(equipmentData)
                .catch(() => {
                    toast({
                        title: "Something went wrong",
                        status: "error",
                        duration: 3000,
                        position: "top",
                    });
                });

        } else {

            if (!formik.values.count || !formik.values.state) {
                toast({
                    title: "You have to fill in the form to continue",
                    status: "error",
                    duration: 3000,
                    position: "top",
                });
                return;
            }
            updateEquipmentMutation.mutateAsync(updateData)
                .catch(() => {
                    toast({
                        title: "Something went wrong",
                        status: "error",
                        duration: 3000,
                        position: "top",
                    });
                });
        }

    }

    return (
        <form style={{ width: "full" }} onSubmit={(e) => submit(e)} >
            <Flex w={"full"} gap={"4"} flexDir={"column"} pb={"4"} >
                <Box w={"full"} >
                    <Text color={"#101928"} fontSize={"14px"} fontWeight={"500"} mb={"1"} >Equipment</Text>
                    <InputComponent
                        name="type"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("type", true, true)
                        }
                        value={formik?.values?.type}
                        touch={formik.touched.type}
                        error={formik.errors.type}
                        type='text' />
                </Box>
                <Flex gap={"4"} >
                    <Box w={"full"} >
                        <Text color={"#101928"} fontSize={"14px"} fontWeight={"500"} mb={"1"} >Qty</Text>
                        <InputComponent
                            name="count"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("count", true, true)
                            }
                            value={formik?.values?.count}
                            touch={formik.touched.count}
                            error={formik.errors.count} type='number' />
                    </Box>
                    {edit && (
                        <Box w={"full"} >
                            <Text color={"#101928"} fontSize={"14px"} fontWeight={"500"} mb={"1"} >Status</Text>
                            <Select
                                name="state"
                                value={formik?.values?.state}
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("state", true, true)
                                } placeholder='Select Status' fontSize={"14px"} bgColor="#FCFCFC" borderColor="#BDBDBD" _hover={{ borderColor: "#BDBDBD" }} _focus={{ backgroundColor: "#FCFCFC" }} focusBorderColor="#BDBDBD" height={"45px"}>
                                <option>ACTIVE</option>
                                <option>TEMPORARILY_DISABLED</option>
                                <option>PERMANENTLY_DISABLED</option>
                            </Select>
                        </Box>
                    )}
                </Flex>
                
                {!edit && ( 
                    <Box w={"full"} >
                        <Text color={"#101928"} fontSize={"14px"} fontWeight={"500"} mb={"1"} >Image</Text>
                        <ImageSelector setImage={setImageFile} />
                    </Box>
                )}

                <Button type="submit" isLoading={addEquipmentMutation?.isLoading || uploaderMutation?.isLoading} isDisabled={addEquipmentMutation?.isLoading || uploaderMutation?.isLoading} h={"45px"} gap={"2"} rounded={"5px"} width={"full"} mt={"4"} bgColor={"#1F7CFF"} _hover={{ backgroundColor: "#1F7CFF" }} display={"flex"} alignItems={"center"} justifyContent={"center"} color={"white"} >
                    Add Equipment
                </Button>
            </Flex>
        </form>
    )
}

export default Equipmentform
