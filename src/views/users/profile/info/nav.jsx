import { NavLink } from "react-router-dom";
const isActiveUsersProfileInfoNavLink = ({isActive}) => isActive ? "relative w-full inline-block whitespace-nowrap px-4 py-2 bg-gray-200 rounded-lg" : "relative w-full inline-block whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-200"

const UsersProfileInfosNav = () => {
    return (
        <>
            <ul className="max-w-full flex gap-4 overflow-hidden overflow-x-auto p-4
            lg:flex-wrap">
                <li className="relative rounded-lg
                lg:w-full">
                    <NavLink to="personal_info" 
                        className={isActiveUsersProfileInfoNavLink}>Personal informations</NavLink>
                </li>
                <li className="relative rounded-lg
                lg:w-full">
                    <NavLink to="address" 
                        className={isActiveUsersProfileInfoNavLink}>Address</NavLink>
                </li>



                <li className="relative rounded-lg
                lg:w-full">
                    <NavLink to="#" 
                        className="relative w-full inline-block whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-200">Link #</NavLink>
                </li>
                <li className="relative rounded-lg
                lg:w-full">
                    <NavLink to="#" 
                        className="relative w-full inline-block whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-200">Link #</NavLink>
                </li>
                <li className="relative rounded-lg
                lg:w-full">
                    <NavLink to="#" 
                        className="relative w-full inline-block whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-200">Link #</NavLink>
                </li>
                <li className="relative rounded-lg
                lg:w-full">
                    <NavLink to="#" 
                        className="relative w-full inline-block whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-200">Link #</NavLink>
                </li>
            </ul>
        </>
    )
};

export default UsersProfileInfosNav;