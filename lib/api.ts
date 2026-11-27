import axios from "axios";
import { ProductRespons } from "./types";

export default async function getProducts():Promise<ProductRespons[]>{
 const{data}=await axios.get("https://node5.onrender.com/user/user/")
 return data.data
    
}

export async function deleteData(_id:string):Promise<ProductRespons[]>{
 const{data}=await axios.delete(`https://node5.onrender.com/user/user/${_id}`)
 return data.data
    
}