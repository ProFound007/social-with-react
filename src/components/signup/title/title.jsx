import AppleStoreButton from "./apple-store";
import GooglePlayButton from "./google-play";

const SignUpTitle = () => {
    return (
        <div className="relative grid grid-cols-1 gap-8">
            <div className="relative">
                <h1 className="relative text-6xl font-black text-white">
                I am ProFound.
                </h1>
                <p className="relative text-gray-300 text-justify mt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nesciunt! Voluptatum a nisi rerum accusamus perspiciatis deleniti nulla sit libero illo placeat, est, eius eaque aut reprehenderit assumenda, eum ad!
                </p>
            </div>

            <div className="relative flex gap-4">
                <div className="relative">
                    <GooglePlayButton />
                </div>
                <div className="relative">
                    <AppleStoreButton/>
                </div>
            </div>
        </div>
    )
};

export default SignUpTitle;