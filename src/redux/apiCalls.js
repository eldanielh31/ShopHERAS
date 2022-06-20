import { publicRequest } from "../requestMethods";
import {loginFailure, loginStart, loginSuccess} from "./userRedux";

export const login = async(dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}

export const suscription = async(mail)=>{
    try{
        await publicRequest.post("/suscription", mail);
    }catch(err){
        console.log(err);
    }
}