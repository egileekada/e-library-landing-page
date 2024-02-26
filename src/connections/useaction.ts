import { ICreateUser } from "../models";
import axios from "../util/apiclient" 
 
export function useAddUserCallback() {
  const handleAddUser = async (postData: ICreateUser): Promise<any> => {    
    try{ 
        const response = await axios.post('/user/create', postData,
        {
          headers: {'Content-Type':'application/json'}, 
        }); 
        return response       
    } catch(err: any) {                  
      return err?.response    
    }     
  }
  return { handleAddUser }
} 
 
export function useUploaderCallback() {
  const handleUploader = async (postData: any, image: any): Promise<any> => {    
    try{ 
        const response = await axios.post('/file-upload/upload', postData,
        {
          headers: {
            'Content-Type': image.type, 
          }, 
        }); 
        return response       
    } catch(err: any) {                  
      return err?.response    
    }     
  }
  return { handleUploader }
} 
 
export function useGetDataCallback() {
    const handleGetData = async (url: string, params?: any): Promise<any> => {    
      try{ 
          const response = await axios.get(url,
          {
            params: params,
            headers: {'Content-Type':'application/json'}, 
          }); 
          return response       
      } catch(err: any) {                  
        return err?.response    
      }     
    }
    return { handleGetData }
  }