import { useState } from "react";
import { auth, googleProvider } from "../firebase/config";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login Successful!");
            navigate('/');
        } catch (err) {
            toast.error(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success("Login with Google Successful!");
            navigate('/');
        } catch (err) {
            toast.error(err.message);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            toast.error("Please enter your email first!");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset link sent! Check your email.");
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="flex justify-center mt-20">
            <form
                onSubmit={handleLogin}
                className="bg-green-100 p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-green-800"> Login </h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-fuchsia-300 bg-white p-2 mb-4 rounded" />

                <div className="relative items-center">
                    <input type={showPassword ? "text" : "password"} placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-fuchsia-300 bg-white p-2 mb-2 rounded" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2.5 text-xl text-green-700" >
                        {showPassword ? <AiTwotoneEye /> : <AiTwotoneEyeInvisible />}
                    </button>
                </div>

                {/* Forgot Password */}
                <div className="text-right mb-4">
                    <button type="button" onClick={handleForgotPassword} className="text-sm text-green-700 hover:underline italic font-semibold" > Forgot Password? </button>
                </div>
                <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white p-2 rounded mb-3" > Login</button>
                <button type="button" onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold p-2 rounded mb-3" >
                    <FcGoogle className="text-2xl" /> Login with Google
                </button>

                {/* Signup Link */}
                <p className="text-sm text-center">Don't have an account?{" "} <Link to="/signup" className="text-green-700 font-semibold hover:underline hover:font-bold italic">Signup</Link> </p>
            </form>
        </div>
    );
};

export default Login;
