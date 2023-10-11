import SignUpBox from "../components/signup/box/box";
import SignUpTitle from "../components/signup/title/title";

const SignUp = () => {
    return (
        <section className="signup relative min-h-screen min-w-screen font-['Open_Sans'] grid items-center sm:bg-[url('/img/signup/background.png')] bg-no-repeat bg-cover	bg-center
                            md:grid-cols-2
                            after:absolute after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:z-0">
            <div className="signup-title relative hidden p-16 z-10
                            md:block">
                <SignUpTitle />
            </div>
            <div className="signup-box relative py-16 z-10
                            sm:grid sm:place-content-center">
                <SignUpBox/>
            </div> 
        </section>
    );
};

export default SignUp;