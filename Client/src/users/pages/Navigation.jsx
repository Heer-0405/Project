import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { $UserLogout } from '../../redux/Thunk/Auth.thunk'


export default function Navigation() {
    const dispatch = useDispatch()
    const { userData } = useSelector(x => x.AuthData)
    return (
        <>
            <div className='flex item-center justify-between'>
                <nav>
                    <div className='flex  item-center font-bold  px-5 py-2'>
                        <h1> HEER  STORE </h1>
                    </div>

                </nav>


                <div>
                    <ul className='flex  item-center gap-10 px-10 py-2 '>
                        <li><NavLink to="/">HOME </NavLink></li>

                        {userData ?
                            <>
                                <button className='button red-500-50' onClick={() => dispatch($UserLogout())}>LOG OUT</button>

                            </> :

                            <>
                                <li><NavLink to="/UserRegister">REGISTER </NavLink></li>
                                <li><NavLink to="/UserLogin">LOGIN</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
            </div >
        </>
    )
}