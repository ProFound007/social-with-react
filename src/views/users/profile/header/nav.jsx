import { NavLink } from "react-router-dom";
const isActiveUsersProfileHeaderNavLink = ({isActive}) => isActive ? "relative leading-none whitespace-nowrap inline-block py-4 border-b-2 transition duration-150 ease-in ease-out border-blue-500" : "relative leading-none whitespace-nowrap inline-block py-4 border-b-2 border-white transition duration-150 ease-in ease-out hover:border-blue-500"

const UsersProfileHeaderNav = () => { 
    return (
        <>
            <ul className="relative max-w-full flex overflow-hidden overflow-x-auto gap-4 md:gap-8">
                <li className="relative">
                    <NavLink to="info" 
                            className={isActiveUsersProfileHeaderNavLink}>Informations</NavLink>
                </li>
                <li className="relative">
                    <NavLink to="videos" 
                            className={isActiveUsersProfileHeaderNavLink}>Videos</NavLink>
                </li>
                <li className="relative">
                    <NavLink to="musicals" 
                            className={isActiveUsersProfileHeaderNavLink}>Musicals</NavLink>
                </li>
                <li className="relative">
                    <NavLink to="#" 
                            className="relative leading-none whitespace-nowrap inline-block py-4 border-b-2 border-white transition duration-150 ease-in ease-out hover:border-blue-500">Link 1</NavLink>
                </li>
                <li className="relative">
                    <NavLink to="#" 
                            className="relative leading-none whitespace-nowrap inline-block py-4 border-b-2 border-white transition duration-150 ease-in ease-out hover:border-blue-500">Link 2</NavLink>
                </li>
                <li className="relative">
                    <NavLink to="#" 
                            className="relative leading-none whitespace-nowrap inline-block py-4 border-b-2 border-white transition duration-150 ease-in ease-out hover:border-blue-500">Link 3</NavLink>
                </li>
                <li className="relative">
                    <NavLink to="#" 
                            className="relative leading-none whitespace-nowrap inline-block py-4 border-b-2 border-white transition duration-150 ease-in ease-out hover:border-blue-500">Link 4</NavLink>
                </li>
            </ul>
        </>
    )
};

export default UsersProfileHeaderNav;