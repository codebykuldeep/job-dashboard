import axios from "axios";
import constant from "../helper/constant";
import { ReqBody } from "../types/formTypes";
import { getToken } from "./utilsFunctions";

export async function UserRegistration(body:ReqBody){
    try {
         const {data}  = await axios.post(constant.SERVER+'/register',body,{
            headers:{
                'Content-Type':'application/json',
            }
         })
         console.log(data);
         return data
    } catch (error) {
        return {success:false,data:error}
    }
}


export async function UserLogin(body:ReqBody) {
    try {
        const {data}  = await axios.post(constant.SERVER+'/login',body,{
           headers:{
               'Content-Type':'application/json',
           }
        })
        console.log(data);
        return data
   } catch (error) {
       return {success:false,data:error}
   }
}


export async function UserVerify() {
    try {
        const {data}  = await axios.get(constant.SERVER+'/verify',{
           headers:{
               'Authorization':getToken(),
           }
        })
        console.log(data);
        return data
   } catch (error) {
       return {success:false,data:error}
   }
}