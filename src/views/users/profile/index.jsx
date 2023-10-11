import { Routes, Route } from "react-router-dom";
import UsersProfileHeader from "./header"
import UsersProfileInfo from "./info";
import UsersProfileVideos from "./videos"
import UsersProfileMusicals from "./musicals"

const UserProfile = () => {
    return (
        <>
            <header className="relative max-w-full font-['Open_Sans'] rounded-b shadow-[0px_0px_4px_0px_rgba(72,72,72,0.5)]">
                <UsersProfileHeader />
            </header>
            <div className="relative container mx-auto mt-4 
            lg:mb-4">
                <Routes>
                    <Route path="info/*" element={<UsersProfileInfo />}/>
                    <Route path="videos/*" element={<UsersProfileVideos />}/>
                    <Route path="musicals/*" element={<UsersProfileMusicals />}/>
                    <Route path="*" element={<p>Not Found Page 404</p>}/>
                </Routes>
            </div>
        </>
    )
};

export default UserProfile;
