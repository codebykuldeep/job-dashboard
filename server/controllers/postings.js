import { createPost, getAllPostsByEmp } from "../lib/postings.js";
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

  try {
    await createPost(body);
    return res.json(new ApiResponse(200, { message: "job post added" }, true));
  } catch (error) {
    return res.status(500).json(new ApiResponse(500, { message: "failed to add job posts",error }, false));
  }
}

export async function handleGetPosts(req,res) {
    const {id} = req.query;
    try {
        const data = await getAllPostsByEmp(id);
        return res.json(new ApiResponse(200,data, true));
    } catch (error) {
        return res.json(new ApiResponse(200, { message: "posts data fetch failed",error }, true));
    }
}
