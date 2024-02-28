import axios from "../util/apiclient"

export function useAddUserCallback() {
  const handleAddUser = async (postData: object): Promise<any> => {
    try {
      const response = await axios.post("/user/create", postData,
        {
          headers: { 'Content-Type': 'application/json' },
        });
      return response
    } catch (err: any) {
      return err?.response
    }
  }
  return { handleAddUser }
}



export function useAddGadgetCallback() {
  const handleAddGadget = async (postData: object): Promise<any> => {
    try {
      const response = await axios.post("/hardware/gadget/add", postData,
        {
          headers: { 'Content-Type': 'application/json' },
        });
      return response
    } catch (err: any) {
      return err?.response
    }
  }
  return { handleAddGadget }
}


export function useUpdateGadgetCallback() {
  const handleUpdateGadget = async (postData: {
    count: number,
    state: string
  }, id: string): Promise<any> => {
    try {
      const response = await axios.put("/hardware/gadget/" + id, postData,
        {
          headers: { 'Content-Type': 'application/json' },
        });
      return response
    } catch (err: any) {
      return err?.response
    }
  }
  return { handleUpdateGadget }
}

export function useUpdateEquipmentCallback() {
  const handleUpdateEquipment = async (postData: {
    count: number,
    state: string
  }, id: string): Promise<any> => {
    try {
      const response = await axios.put("/hardware/equipment/" + id, postData,
        {
          headers: { 'Content-Type': 'application/json' },
        });
      return response
    } catch (err: any) {
      return err?.response
    }
  }
  return { handleUpdateEquipment }
}

export function useAddEquipmentCallback() {
  const handleAddEquipment = async (postData: object): Promise<any> => {
    try {
      const response = await axios.post("/hardware/equipment/add", postData,
        {
          headers: { 'Content-Type': 'application/json' },
        });
      return response
    } catch (err: any) {
      return err?.response
    }
  }
  return { handleAddEquipment }
}

export function useUploaderCallback() {
  const handleUploader = async (postData: any, image: any): Promise<any> => {
    try {
      const response = await axios.post('/file-upload/upload', postData,
        {
          headers: {
            'Content-Type': image.type,
          },
        });
      return response
    } catch (err: any) {
      return err?.response
    }
  }
  return { handleUploader }
}

export function useGetDataCallback() {
  const handleGetData = async (url: string, params?: any): Promise<any> => {
    try {
      const response = await axios.get(url,
        {
          params: params,
          headers: { 'Content-Type': 'application/json' },
        });
      return response
    } catch (err: any) {
      return err?.response
    }
  }
  return { handleGetData }
}