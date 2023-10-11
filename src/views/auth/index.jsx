import { Routes, Route, Navigate } from "react-router-dom";
import AuthSignUp from "./signup";

const Auth = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<Navigate to="signup" />}/>
                <Route path="signup" element={<AuthSignUp />}/>
                <Route path="*" element={<p>Not Found Page 404</p>}/>
            </Routes>
        </>
    )
};

export default Auth;