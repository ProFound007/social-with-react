import { Routes, Route, Navigate } from "react-router-dom";
import UsersProfileInfosNav from "./nav";

const UsersProfileInfo = () => {
    return (
        <>
            <section className="relative grid grid-cols-1 gap-4
            lg:grid-cols-4">
                <nav className="relative shadow-[0px_0px_4px_0px_rgba(72,72,72,0.5)] rounded">
                    <UsersProfileInfosNav />
                </nav>
                
                <div className="relative shadow-[0px_0px_4px_0px_rgba(72,72,72,0.5)] rounded p-4
                lg:col-span-3">
                    <Routes>
                        <Route path="" element={<Navigate to="personal_info" />}/>
                        <Route path="personal_info" element={<p>Personal Informations</p>}/>
                        <Route path="address" element={<p>Address</p>}/>
                        <Route path="*" element={<p>Not Found Page 404</p>}/>
                    </Routes>
                </div>

            </section>
        </>
    )
};

export default UsersProfileInfo;