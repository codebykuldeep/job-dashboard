import { getApplicantsForPost } from "../lib/applications.js";
import { createPost, deletePost, getAllPostsByEmp, getPost, updatePost } from "../lib/postings.js";
import { ApiResponse } from "../utils/response.js";

export async function handleNewPost(req, res) {
  console.log(req.body);
  const body = req.body;
  //  const { emp_id,title,experience,description,
  //     location,
  //     job_type,
  //     education,
  //     date
  //   } = req.body;
    body.company_name = req.user.company_name || req.user.name;
  try {
    await createPost(body);
    return res.json(new ApiResponse(200, { message: "job post added" }, true));
  } catch (error) {
    return res.status(500).json(new ApiResponse(500, { message: "failed to add job posts",error }, false));
  }
}

export async function handleUpdatePost(req, res) {
    console.log(req.body);
    const body = req.body;
  
    try {
      await updatePost(body);
      return res.json(new ApiResponse(200, { message: "job post updated" }, true));
    } catch (error) {
      return res.status(500).json(new ApiResponse(500, { message: "failed to update job posts",error }, false));
    }
  }

export async function handleGetPosts(req,res) {
    const {id} = req.query;
    try {
        const data = await getAllPostsByEmp(id);
        return res.json(new ApiResponse(200,data, true));
    } catch (error) {
        return res.json(new ApiResponse(500, { message: "posts data fetch failed",error }, false));
    }
}

export async function handleGetSinglePost(req,res) {
    const {id} = req.params;
    try {
        const data = await getPost(id);
        return res.json(new ApiResponse(200,data, true));
    } catch (error) {
        return res.json(new ApiResponse(200, { message: "posts data fetch failed",error }, true));
    }
}


export async function handleGetPostApplications(req,res) {
    const {id} = req.params;
    try {
        const data = await getApplicantsForPost(id);
        data.forEach((entry)=>{
            entry.user_data = JSON.parse(entry.user_data);
            entry.name = entry.user_data.name;
        })
        return res.json(new ApiResponse(200,data, true));
    } catch (error) {
        return res.json(new ApiResponse(500, { message: "posts data fetch failed",error }, false));
    }
}


export async function handleDeletePost(req,res) {
    const {id} = req.params;
    try {
        await deletePost(id);
        return res.json(new ApiResponse(200,{ message:`Post ${id} is deleted` }, true));
    } catch (error) {
        return res.json(new ApiResponse(500, { message: `Post ${id} deletion failed`,error }, false));
    }
}
