import constant from "../../helper/constant";
import { ReqBody } from "../../types/formTypes";
import { Response } from "../../types/requestResponseTypes";
import { getToken } from "../utilsFunctions";

export async function addPosts(body:ReqBody) {
    const link = constant.SERVER + '/posts/add';
    try {
        const response = await fetch(link,{
            method:'POST',
            headers:{
                'Authorization':getToken(),
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
        const data:Response = await response.json();
        return Boolean(data.success)
    } catch (error) {
        return false;
    }
}