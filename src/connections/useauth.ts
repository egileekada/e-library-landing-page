 import axios from "../util/apiclient" 



export interface LoginDataType {
  email: string;
  password: string;
}

export function useLoginCallback() {
  const handleLogin = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('/admin/login', postData,
        {
          headers: {'Content-Type':'application/json'}, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleLogin }
}