
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