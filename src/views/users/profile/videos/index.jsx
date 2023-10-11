import { Routes, Route, Navigate } from "react-router-dom";
import UsersProfileVideosNav from "./nav";

const UsersProfileVideos = () => {
    return (
        <>
            <section className="relative grid gap-4 grid-cols-1
            lg:grid-cols-4">
                <nav className="relative shadow-[0px_0px_4px_0px_rgba(72,72,72,0.5)] rounded">
                    <UsersProfileVideosNav />
                </nav>

                <div className="relative shadow-[0px_0px_4px_0px_rgba(72,72,72,0.5)] rounded p-4
                lg:col-span-3">
                    <Routes>
                        <Route path="" element={<Navigate to="saved_videos" />}/>
                        <Route path="saved_videos" element={<p>Videos</p>}/>
                        <Route path="filims" element={<p>Films</p>}/>
                        <Route path="*" element={<p>Not Found Page 404</p>}/>
                    </Routes>
                </div>
            </section>
        </>
    )
};

export default UsersProfileVideos;