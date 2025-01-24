export interface IUser {
    user_id:string;
    email:string;
    phone:string;
    resume:string;
    summary:string;
    status:string;
    role:string;
    [index:string]:string;
}

export interface IEmployer {
    emp_id:string;
    email:string;
    phone:string;
    summary:string;
    status:string;
    [index:string]:string;
}


export interface IPost {
  created_at: string;
  date: string;
  description: string;
  education: string;
  emp_id: string;
  experience: string;
  job_type: string;
  location: string;
  post_id: string;
  status: string;
  title: string;
}

export interface IApplicant {
  created_at: string;
  user_data: string;
  post_id: string;
  user_id: string;
  app_id: string;
  status: string;
  [index:string]:string;
}



