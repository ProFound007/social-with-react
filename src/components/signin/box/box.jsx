import SignInForm from "./form";
import { Link } from "react-router-dom";

const SignInBox = () => {
    return (
        <section className="relative p-8 rounded-lg w-full grid gap-4 bg-white
                            sm:w-96 sm:shadow-[0px_0px_4px_0px_rgba(72,72,72,0.5)]">
            <header className="relative">
                <h2 className="relative text-2xl font-bold">Sign In</h2>
            </header>

            <div className="relative">
                <SignInForm />
            </div>

            <footer>
                <p className="relative text-center">
                    Men tizimda ro`yxatdan o`tmaganman 
                    <Link to="/signup" className="relative text-blue-500"> Ro`yxatdan o`tish</Link>
                </p>
            </footer>
        </section>
    )
};

export default SignInBox;