import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { $AdminAutoLogin } from "../redux/Thunk/Admin.thunk";

export default function AdminIndex(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { adminLogin } = useSelector(state => state.AdminData)


    useEffect(() => {
        dispatch($AdminAutoLogin())
    },[])

    useEffect(() => {
       

        if(adminLogin){
            navigate("/admin")

        }else{
            navigate("/admin/login")
        }
    },[ adminLogin ])

    return (
        <>
        <Outlet/>
        </>
    )
}