import { useState } from "react";

const SignUpBoxForm = () => {
    const [email, setEmail] = useState('');

    const handlerChangeEmailInput = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handlerFormSubmit = (e) => {
        e.preventDefault();
        alert(email)
    }



    return (
        <form onSubmit={handlerFormSubmit}
            className="relative w-full grid gap-4">
            <label htmlFor="emailID">
                <span className="hidden">Email:</span>
                <input 
                    type="email" 
                    className="relative w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Elektron pochta manzil kiriting"
                    value={email}
                    onChange={handlerChangeEmailInput}/>
            </label>

            <div className="passwor-box relative grid gap-4
                            sm:grid-cols-2">

                <label htmlFor="passwor1">
                    <span className="hidden">Email:</span>
                    <input 
                        type="email"
                        id="passwor1" 
                        className="relative w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Yangi parol kiriting"/>
                </label>

                <label htmlFor="password2">
                    <span className="hidden">Email:</span>
                    <input 
                        type="email"
                        id="password2"
                        className="relative w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Parolni qayta tering"/>
                </label>

            </div>

            <div className="note-me relative flex">
                <label 
                    htmlFor="noteme"
                    className="flex items-center gap-2
                                hover:cursor-pointer">
                    <input 
                        type="checkbox"
                        id="noteme" />
                    <span className="relative text-gray-400">
                        Meni eslab qol
                    </span>
                </label>
            </div>

            <button className="relative px-4 py-2 text-white bg-blue-600 rounded-lg 
                                hover:bg-blue-500">Tasdiqlash kodini olish</button>
        </form>
    );
};

export default SignUpBoxForm;