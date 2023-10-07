import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
        </>
    );
};

export default Root;