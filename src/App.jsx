import { Routes, Route, Navigate } from "react-router-dom";
import UserProfile from "./views/users/profile";
import UsersSettings from "./views/users/settings";
import Auth from "./views/auth";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/users/profile/"/>}/>
            <Route path="/users/profile/*" element={<UserProfile />}/>
            <Route path="/auth/*" element={<Auth />}/>
            <Route path="/users/settings" element={<UsersSettings />}/>
            <Route path="*" element={<p>Not Found Page 404</p>}/>
        </Routes>
    )
};

export default App;
