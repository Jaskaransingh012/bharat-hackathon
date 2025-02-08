import React from 'react'
import "../Css/EditProfile.css"
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import BasicInfo from '../Components/Profile/BasicInfo'
import EditProfilePic from '../Components/Profile/EditProfile'

const EditProfile = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6">
            <div className="max-w-6xl mx-auto rounded-2xl p-8">
                <section class="layout min-h-[80vh]">
                    <div class="sidebar bg-white rounded-2xl shadow-lg">
                        <ul>
                            <li className='mt-5'>
                                <Link to="/edit-profile/info" className='font-bold p-5 '>Edit Profile</Link>
                            </li>
                            <li className='mt-5'>
                                <Link to="/edit-profile/profile-picture" className='font-bold p-5 mt-10'>Profile Picture</Link>
                            </li>
                        </ul>

                    </div>
                    <div class="body bg-white rounded-2xl shadow-lg">
                        <Routes>
                            <Route>
                                <Route path='info' element={<BasicInfo/>} />
                                <Route path='profile-picture' element={<EditProfilePic  />} />
                            </Route>
                        </Routes>
                        <Outlet />
                    </div>

                </section>  
            </div>
            

        </div>
    )
}

export default EditProfile