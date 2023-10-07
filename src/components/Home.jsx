import { useContext } from "react";
import { AuthProvide } from "../context/AuthContext";

const Home = () => {
    const authInfo = useContext(AuthProvide)
    console.log(authInfo)
    return (
        <div>
            this is home
        </div>
    );
};

export default Home;