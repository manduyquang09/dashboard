import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
export const regexGmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const regexPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/
export  const data = [30, 30, 35, 35, 25, 45];
export const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export const StackedData = [
    { all: 10, snowUI: 5, dashboard: 8 },
    { all: 15, snowUI: 10, dashboard: 12 },
    { all: 8, snowUI: 3, dashboard: 6 },
    { all: 12, snowUI: 7, dashboard: 10 },
    { all: 18, snowUI: 12, dashboard: 15 },
    { all: 9, snowUI: 4, dashboard: 7 },
];
export const itemList = ['all', 'snowUI', 'dashboard'];
export  const colors = ['black', 'grey', 'red'];
//8853096313
//13828

export const authSchema = yup.object({
    email :yup.string().email("please enter a valid Email").required("Email is required") ,
    passWord:yup.string().required("password is required").min(5, "password must be at least 5 characters")
})