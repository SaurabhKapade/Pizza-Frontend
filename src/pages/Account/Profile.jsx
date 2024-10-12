
import Layout from "../../Layouts/Layout"
import { useSelector } from "react-redux";
import profileIcon from "../../assets/images/profileIcon.png"
import {  FaTruck, FaUserCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
function Profile() {
    const {username} = useSelector((state)=>({
        username:state.auth.data.firstName
    }))
    useEffect(()=>{
        
    },[username])
  
  return (
    <Layout>
        <div className="flex w-full gap-5 h-screen p-5 justify-center bg-gray-100">
            <div className="" style={{width:"23%"}}>
                
                <div className="flex h-16 shadow-lg bg-white">
                    <div className="ml-5 flex justify-center items-center">
                       <img src={profileIcon} className="h-12" alt="profile" />
                    </div>
                    <div className="ml-5 flex flex-col items-start justify-center">
                        <div className="text-gray-800 text-xs font-normal ">hellow,</div>
                        <div className="text-xl font-semibold">{username}</div>
                    </div>
                </div>

               <Link to={"/"}><div className="flex mt-3 h-14 shadow-sm bg-white border-b-2 hover:text-orange-400">
                    <div className="ml-5 flex justify-center items-center">
                       <FaTruck size={30} className="text-orange-400"/>
                    </div>
                    <div className="ml-5 flex flex-col items-start justify-center">
                        <div className=" text-lg font-semibold">MY ORDERS</div>
                    </div>
                    <div className="flex justify-end items-center ml-auto pr-3">
                        <FaChevronRight size={20}/>
                    </div>
                </div></Link>

               <div className="flex h-12 shadow-sm bg-white">
                    <div className="ml-5 flex justify-center items-center">
                       <FaUserCircle size={25} className="text-orange-400"/>
                    </div>
                    <div className="ml-5 flex flex-col items-start justify-center">
                        <div className="text-lg font-semibold">ACCOUNT SETTINGS</div>
                    </div>
                </div>
                <NavLink
                    to="/profile/account-settings" 
                    className={({ isActive }) => 
                        isActive 
                        ? "bg-orange-200 text-orange-400 font-semibold"
                        : "hover:bg-orange-200 hover:text-orange-400"
                    } >

                    <div className="flex h-12 shadow-sm bg-white hover:bg-orange-200 hover:font-semibold">
                        <div className="ml-16 flex flex-col items-start justify-center">
                        <div className="text-base">Profile Information</div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={'/profile/manage-address'}
                    className={({isActive})=>
                        isActive
                        ? "bg-orange-200 text-orange-400 font-semibold"
                        :" hover:bg-orange-200 hover:text-orange-400"
                    }
                >
                <div className="flex h-12  hadow-lg bg-white  hover:bg-orange-200 hover:text-orange-400 hover:font-semibold">
                    <div className="ml-16 flex  flex-col items-start justify-center">
                        <div className="text-base ">Manage Address</div>
                    </div>
                </div></NavLink>
                
                
            </div>
            <div className=" bg-white shadow-lg flex p-7 "style={{width:"70%"}}>
                <Outlet/>
            </div>
        </div>
    </Layout>
  )
}

export default Profile