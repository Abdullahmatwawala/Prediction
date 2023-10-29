import { Link } from "react-router-dom";
import { logo } from "../assets";
import React from 'react'


const Navbar = () => {
    return (
        <div className="nav flex justify-center items-center  bg-slate-50 shadow-md">

        <nav className="flex justify-between items-center  w-full mb-5 pt-3 max-w-7xl ">
                <img src={logo} alt="logo" className="w-16 object-contain" />
                <div className="flex justify-evenly items-center gap-3 flex-col md:flex-row md:gap-10">

                    <Link to='/'
                        className="red_btn"
                    >Home</Link>
                    <Link to='/login'
                        className="red_btn"
                    >Login</Link>
                    <Link to='/upload'
                        className="red_btn"
                    >Upload</Link>
                    <Link to='/Predication'
                        className="red_btn"
                    >Predication</Link>

                </div>

            </nav>
        </div>
    )
}

export default Navbar