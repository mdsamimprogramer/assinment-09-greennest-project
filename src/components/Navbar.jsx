import { NavLink, useNavigate } from "react-router";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../assets/icons8-tree-60.png"

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    const linkClass = (isActive) =>
        isActive ? "text-green-800 font-bold border-b-2 border-green-800" : "text-black";

    return (
        <nav className="bg-gradient-to-r from-green-400 to-fuchsia-300 p-4 shadow-xl sticky top-0">
            <div className="mx-3 md:mx-5 m-auto flex justify-between items-center">
                <NavLink to="/" className="text-2xl md:text-3xl font-bold flex items-center gap-1.5 md:gap-2.5"><img className="w-8 md:w-10" src={logo} alt="" /> GreenNest</NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center font-semibold">
                    <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>Home</NavLink>
                    <NavLink to="/plants" className={({ isActive }) => linkClass(isActive)}>Plants</NavLink>
                    <NavLink to="/profile" className={({ isActive }) => linkClass(isActive)}>My Profile</NavLink>

                    {user ? (
                        <div className="flex items-center gap-4">
                            <img src={user.photoURL || "https://via.placeholder.com/30"} alt="avatar" className="w-8 h-8 rounded-full" />
                            <span>{user.displayName}</span>
                            <button onClick={handleLogout} className="text-red-500 font-bold">Logout</button>
                        </div>
                    ) : (
                        <>
                            <NavLink to="/login" className={({ isActive }) => linkClass(isActive)}>Login</NavLink>
                            <NavLink to="/signup" className={({ isActive }) => linkClass(isActive)}>Register</NavLink>
                        </>
                    )}
                </div>

                <button className="md:hidden font-bold" onClick={() => setOpen(!open)}>
                    {open ? <IoCloseSharp className="font-bold" /> : <RiMenu3Fill className="font-bold text-black" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="flex flex-col gap-3 mt-4 md:hidden font-semibold">
                    <NavLink to="/" className={({ isActive }) => linkClass(isActive)} onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/plants" className={({ isActive }) => linkClass(isActive)} onClick={() => setOpen(false)}>Plants</NavLink>
                    <NavLink to="/profile" className={({ isActive }) => linkClass(isActive)} onClick={() => setOpen(false)}>My Profile</NavLink>

                    {user ? (
                        <>
                            <span className="text-green-800">{user.displayName}</span>
                            <button onClick={handleLogout} className="text-red-500 text-left">Logout</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className={({ isActive }) => linkClass(isActive)} onClick={() => setOpen(false)}>Login</NavLink>
                            <NavLink to="/signup" className={({ isActive }) => linkClass(isActive)} onClick={() => setOpen(false)}>Register</NavLink>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
