import SignUpBoxForm from "./form";
import { Link } from "react-router-dom";

const SignUpBox = () => {
    return (
        <div className="relative p-8 rounded-lg w-full grid gap-4 bg-white
                        sm:w-[480px] sm:shadow-[0px_0px_4px_0px_rgba(72,72,72,0.5)]">
            <header>
                <h2 className="relative text-2xl font-bold">Sign Up</h2>
            </header>
            <div className="relative">
                <SignUpBoxForm/>
            </div>
            <footer>
                <p className="relative text-center sm:px-16">
                    Men allaqachon tizimda ro`yxatdan o`tganman 
                    <Link to="/signin" className="relative text-blue-500"> Tizimga kirish</Link>
                </p>
            </footer>
        </div>
    );
};

export default SignUpBox;