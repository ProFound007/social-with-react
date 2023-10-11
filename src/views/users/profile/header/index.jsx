import UsersProfileHeaderBanner from "./banner";
import UsersProfileHeaderAvatar from "./avatar";
import UsersProfileHeaderInfoButtons from "./info-buttons";
import UsersProfileHeaderSettingButton from "./setting-button";
import UsersProfileHeaderNav from "./nav";

const UsersProfileHeader = () => {
    return (
        <>
            {/* Banner of Users Profile */}
            <figure className="relative w-full h-64 overflow-hidden hidden md:block
                after:absolute after:h-1/2 after:w-full after:bottom-0 after:bg-gradient-to-t after:from-[rgba(36,36,36,0.5)] absolute:to-[rgba(36,36,36,0)]">
                <UsersProfileHeaderBanner />
            </figure>

            {/* Info of Users Profile */}
            <section className="relative container mx-auto md:px-16
                                md:flex">
                
                {/* Avatar's Image of Users Profile */}
                <figure className="relative ">
                    <UsersProfileHeaderAvatar />
                </figure>

                <div className="relative px-4
                                md:grow">

                    <div className="relative grid items-center h-16 -mb-16 -translate-y-full">
                        <h2 className="relative text-3xl font-bold text-white">
                            ProFound
                        </h2>
                    </div>

                    <div className="relative mt-4">
                        <p>PF | Frontend</p>
                        <p>Sometimes you win! Sometimes you learn!</p>
                    </div>

                    {/* Inof's Buttons of Users Profile */}
                    <div className="relative mt-4 flex gap-4">
                        <UsersProfileHeaderInfoButtons />
                    </div>

                    {/* Setting's Button of Users Profile */}
                    <div className="absolute right-0 top-0 -translate-y-1/2 mr-4">
                        <UsersProfileHeaderSettingButton />
                    </div>
                </div>

            </section>
            {/* NavLink of Users Profile */}
            <nav className="relative container mx-auto flex justify-end px-4 mt-4">
                <UsersProfileHeaderNav />
            </nav>
        </>
    )
};

export default UsersProfileHeader;