import { useDispatch, useSelector } from "react-redux"


export default function UserHome() {
    const {  userData } = useSelector(state => state.AuthData)
    const dispatch = useDispatch()

     console.log(userData)

    return (
        <>

            {/* <div className={userData ? "h-[100px] w-[100px] bg-pink-500" : "h-[100px] w-[100px] bg-green-300"}>
                <p className="">{userData ? userData.fName : ""}</p>
                

            </div> */}





        </>
    )
}