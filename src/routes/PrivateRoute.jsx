import { useContext } from "react";
import { AuthProvide } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthProvide);
    if(loading) {
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if(user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
  };

export default PrivateRoute;