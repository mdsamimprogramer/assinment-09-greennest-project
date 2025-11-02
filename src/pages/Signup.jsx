import { useState } from "react";
import { auth, googleProvider } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        // Password validation
        if (!/[A-Z]/.test(password)) return toast.error("Password must have uppercase letter");
        if (!/[a-z]/.test(password)) return toast.error("Password must have lowercase letter");
        if (password.length < 6) return toast.error("Password must be at least 6 characters");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name, photoURL });
            toast.success("Signup Successful!");
            navigate("/");
        } catch (err) {
            toast.error(err.message);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success("Signup with Google Successful!");
            navigate("/");
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="flex justify-center my-18">
            <form onSubmit={handleSignup} className="bg-green-100 p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Signup</h2>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 mb-4 rounded border border-fuchsia-300 bg-white" />
                <input type="text" placeholder="Photo URL" value={photoURL} onChange={e => setPhotoURL(e.target.value)} className="w-full p-2 mb-4 rounded border border-fuchsia-300 bg-white" />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 mb-4 rounded border border-fuchsia-300 bg-white" />
                <div className="relative">
                    <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 mb-4 rounded border border-fuchsia-300 bg-white" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2.5 text-xl text-green-700">{showPassword ? <AiTwotoneEye /> : <AiTwotoneEyeInvisible />}</button>
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded mb-4">Register</button>
                <button type="button" onClick={handleGoogleSignup} className="w-full flex items-center justify-center m-auto gap-2.5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white p-2 rounded mb-4"><FcGoogle className="text-2xl"/>Signup with Google</button>
                <p className="text-sm">Already have an account? <Link to="/login" className="text-green-700 font-semibold hover:font-bold">Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;
