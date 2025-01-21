import { getAllEmployers, getEmployer } from "../lib/employers.js";
import { ApiResponse } from "../utils/response.js";



export async function handleGetAllEmployers(req,res) {
    
    try {
        const data = await getAllEmployers();
        return res.status(200).json(new ApiResponse(200,data,true))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,error,false));
    }
}


export async function handleGetEmployer(req,res) {
    const {id} = req.params;
    try {
        const data = await getEmployer(id);
        return res.status(200).json(new ApiResponse(200,data,true))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,error,false));
    }
}