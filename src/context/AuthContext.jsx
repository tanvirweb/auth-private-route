import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthProvide = createContext(null)

const AuthContext = ({children}) => {
    const authInfo = {name: "Tanvir Ahmed"}

    return (
        <AuthProvide.Provider value={authInfo}>
            {children}
        </AuthProvide.Provider>
    );
};

AuthContext.propTypes = {
    children: PropTypes.node
}

export default AuthContext;