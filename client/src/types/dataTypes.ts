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


