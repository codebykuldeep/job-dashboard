export interface ErrorState{
    value:string;
    status:boolean;
    message:string;
}


export interface FormStateType{
    [index:string]:ErrorState;
}


export interface SnackBarType{
    open:boolean;
    status:boolean;
    message:string;
}


export interface ReqBody{
    [index:string]:string;
}