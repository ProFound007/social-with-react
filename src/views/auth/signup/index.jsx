import { Link } from "react-router-dom";
import AuthSignUpForm from "./form";

const AuthSignUp = () => {
    document.title = "PF | Sign Up"
    return (
        <>
            <section className="relative h-screen w-screen grid font-['Open_Sans']">
                <div className="relative grid grid-cols-1 gap-4 w-full m-auto  p-8  rounded
                md:max-w-lg lg:shadow-[0px_0px_4px_0px_rgba(72,72,72,0.5)]">
                    <header className="relative">
                        <h2 className="relative text-2xl font-bold">
                            Sign Up
                        </h2>
                    </header>

                    <div className="relative mt-4">
                        <AuthSignUpForm />
                    </div>

                    <footer className="relative grid mt-4">
                        <p className="relative w-full mx-auto max-w-[288px] text-center ">
                            Men allaqachon tizimdan ro`yxatdan o`tganman 
                            <Link 
                                to="signin"
                                className="relative text-blue-500 hover:text-blue-600"> Tizimga kirish</Link>
                        </p>
                    </footer>
                </div>
            </section>
        </>
    )
};

export default AuthSignUp;

