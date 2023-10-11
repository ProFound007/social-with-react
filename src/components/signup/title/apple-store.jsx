import { Link } from "react-router-dom"

const AppleStoreButton = () => {
    return (
        <Link to="#" className="relative group py-2 px-6 flex gap-4 border border-white rounded-xl hover:shadow-[0px_0px_4px_0px_rgba(72,72,72,0.5)] hover:bg-white transition duration-300 ease-out hover:ease-in">
            <div className="relative my-auto">
                <img className="h-10" src="/img/signup/apple-store-icon.png" alt="" />
            </div>
            <div className="relative my-auto">
                <p className="relative text-gray-500 ">Get in on</p>
                <p className="relative text-white group-hover:text-[#242424] text-2xl transition duration-300 ease-out hover:ease-in">Apple Store</p>
            </div>
        </Link>
    )
}

export default AppleStoreButton