import { Link } from "react-router-dom";

const UsersProfileHeaderSettingButton = () => {
    return (
        <>
            <Link to="/users/settings" className="relative block h-10 w-10 grid place-content-center rounded-full bg-gray-300">
                <img 
                    src="/img/icons/cog.png"   
                    alt="" 
                    className="relative h-5 w-5"/>
            </Link>
        </>
    )
};

export default UsersProfileHeaderSettingButton;