import { publicRequest } from "../requestMethods";
import {loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess} from "./userRedux";

export const login = async(dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    console.log("start")
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(registerSuccess(res.data));
        console.log("succes")
    } catch (err) {
        dispatch(registerFailure());
        console.log("failure")
    }
}

export const suscription = async(mail)=>{
    try{
        await publicRequest.post("/suscription", mail);
    }catch(err){
        console.log(err);
    }
}

export const postOrder = async(order)=>{
    try {
        await publicRequest.post("/order", order);
    } catch (error) {
        console.log(error);
    }
}

export const getUserbyUsername = async(username)=>{
    try {
        const res = await publicRequest.get("/users/username/" + username);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getUserbyPhone = async (phone) => {
    try {
        const res = await publicRequest.get("/users/phone/" + phone);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getUserbyMail = async (mail) => {
    try {
        const res = await publicRequest.get("/users/mail/" + mail);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}