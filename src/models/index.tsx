
export interface IUserData {
    email: string;
    adminId: number | string;
    id: number | string;
    name: string;
    phone: string;
    staffId: string
} 


export interface ICreateUser {
    name: string,
    email: string,
    phone: string,
    staffId: string
}