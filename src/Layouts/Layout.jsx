// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import pizzaLogo from '../assets/images/pizza1.png'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Slices/AuthSlice'
function Layout({children}) {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  const username = useSelector((state)=>state.auth.data.firstName)
  const role = useSelector((state)=>state.auth.role)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  async function handleLogout(e) {
      e.preventDefault();
      dispatch(logout())
      navigate('/auth/login')
  }
  return (
    <div>
    
        <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">
         <div>
         {
            (role==='ADMIN')?(
              <h1>ADMIN</h1>
            ):(<span></span>)
          }
         </div>
            <div className="flex items-center justify-center">
              <p>Pizza App</p>
                <img src={pizzaLogo} alt="pizza-Logo"/>
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-4'>
                    <li className='hover:text-[#ff9110]'>
                      {' '}
                      <p>Menu{' '}</p>
                    </li>
                    <li className='hover:text-[#ff9110]'>
                      {' '}
                      <p>Services{' '}</p>
                    </li>
                    <li className='hover:text-[#ff9110]'>
                      {' '}
                      <p>About{' '}</p>
                    </li>
                </ul>
            </div>
            <div>
              <ul className='flex gap-5'>
                <li className='hover:text-[#ff9110]'>
                  { isLoggedIn?(
                      <Link onClick={handleLogout}>Logout</Link>
                    ):(<Link to={'/auth/login'}>LogIn</Link>)
                  }
                </li>
                {' '}
                <li className='hover:text-[#ff9110]'>
                  { isLoggedIn?(
                      <h2>{username}</h2>
                    ):(<h2 to={'/auth/login'}></h2>)
                  }
                </li>
              </ul>
            </div>
        </nav>
            {children}
       <Footer/>
    </div>
  )
}

export default Layout