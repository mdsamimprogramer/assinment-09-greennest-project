import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { FourSquare } from "react-loading-indicators";

const Profile = () => {
    const [user] = useAuthState(auth);
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdate = async () => {
        try {
            await updateProfile(user, { displayName, photoURL });
            toast.success("Profile Updated Successfully!");
        } catch (err) {
            toast.error(err.message);
        }
    };

    if (!user) return <p className="text-center max-h-screen"><FourSquare color="#32cd32" size="medium" text="" textColor="" /></p>;

    return (
        <div className="flex justify-center my-18">
            <div className="bg-green-100 p-8 rounded shadow-md w-full max-w-md text-center">
                <img src={photoURL || "https://via.placeholder.com/100"} alt="avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
                <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} className="w-full p-2 mb-4 rounded border border-fuchsia-300 bg-gray-50" placeholder="Display Name"required />
                <input type="text" value={photoURL} onChange={e => setPhotoURL(e.target.value)} className="w-full p-2 mb-4 rounded border border-fuchsia-300 bg-gray-50" placeholder="Photo URL" required/>
                <button onClick={handleUpdate} className="bg-green-700 hover:bg-green-800 text-white p-2 rounded w-full">Update Profile</button>
            </div>
        </div>
    );
};

export default Profile;
