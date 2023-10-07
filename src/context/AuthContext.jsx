import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthProvide = createContext(null)

const AuthContext = ({children}) => {
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {userRegister};
    
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