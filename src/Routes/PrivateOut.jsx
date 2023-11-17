import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router";
const PrivateOut = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <progress
        className="progress progress-secondary w-56"
        value="70"
        max="100"
      ></progress>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateOut;
