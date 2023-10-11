import SignInBox from "../components/signin/box/box";
import SignInTitle from "../components/signin/title/title";

const SignIn = () => {
    return (
        <section className="signin relative min-h-screen min-w-screen font-['Open_Sans'] grid items-center sm:bg-[url('/img/signup/background.png')] bg-no-repeat bg-cover	bg-center
        md:grid-cols-2 after:absolute after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:z-0">
            
            <div className="signin-title relative hidden p-16 z-10
                            md:block">
                <SignInTitle />
            </div>
            <div className="signin-box relative z-10
                            sm:grid sm:place-content-center">
                <SignInBox/>
            </div>

        </section>
    )
};

export default SignIn;