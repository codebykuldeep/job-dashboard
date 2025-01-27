import { getAllEmployers, getEmployer, updateEmployer, updateEmployerStatus } from "../lib/employers.js";
import { ApiResponse } from "../utils/response.js";



export async function handleGetAllEmployers(req,res) {
    const {type} = req.query;
    
    try {
        const data = await getAllEmployers(type);
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



export async function handleEmployerStatusUpdate(req,res){
    const {emp_id,status} = req.body;
    console.log(req.body);
    
    if(!emp_id || status === undefined){
        return res.status(400).json(new ApiResponse(400,{message:'Missing body for request (emp_id ,status).'},false))
    }

    try {
        await updateEmployerStatus(emp_id,status);
        return res.status(200).json(new ApiResponse(200,{message:'Successful update status'},true));

    } catch (error) {
        return res.status(500).json(new ApiResponse(500,error,false));
    }
}

export async function handleEmployerUpdate(req,res) {
    try {
        const {emp_id} = req.user;
        const body = req.body;
        const data = await updateEmployer(body,emp_id);
        return res.json(new ApiResponse(200, data, true));
      } catch (error) {
        return res.json(new ApiResponse(500, {message:'failed to update',error}, false));
      }
}