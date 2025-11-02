import { Navigate, useLocation } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { FourSquare } from "react-loading-indicators";

const ProtectedRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) return <div className="text-center mt-48 min-h-screen"><FourSquare color="#32cd32" size="medium" /></div>;
    if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

    return children;
};

export default ProtectedRoute;
