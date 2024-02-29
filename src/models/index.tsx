
export interface IUserData {
    email: string;
    adminId: number | string;
    id: number | string;
    name: string;
    phone: string;
    staffId: string;
    profilePicture?: string
} 

export interface ICreateUser {
    name: string,
    email: string,
    phone: string,
    staffId: string,
    profilePicture?: string
}

export interface IBorrowData {
    recordNumber: number,
    startDate: string,
    status: string,
    record: {name: string}, 
    endDate: string
}
 
export interface IGadgetData {
    count: number,
    manufacturer: string,
    picture: string,
    state: string, 
    type: string, 
    id: string
} 
 
export interface ICreateGadget  {
    type: string,
    picture?: string,
    manufacturer: string,
    count: number,
    state?: string 
    id?: string
}
 
export interface ICreateEquipment  {
    type: string,
    picture?: string, 
    count: number,
    state?: string, 
    id?: string
} 

export interface IAdmin {
    email: string,
    name: string, 
    profilePicture?: string,
    phone: string, 
    id?: string | number,
    createdAt?: string,
    password?: string
} 