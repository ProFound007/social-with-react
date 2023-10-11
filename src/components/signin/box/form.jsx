import { useState } from "react";

const SignInForm = () => {
    const [email, setEmail] = useState('jamesbondgmp@gmail.com');

    const handlerChangeEmailInput = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
        console.log(email)
    }

    const handlerFormSubmit = (e) => {
        e.preventDefault();
        alert("Ro'yxatdan o'tingiz")
    }   

    return (
        <form onSubmit={handlerFormSubmit}
              className="relative w-full grid gap-4">
            <label htmlFor="emailID">
                <span className="hidden">Email:</span>
                <input 
                    type="email" 
                    className="relative w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Elektron pochta manzilni kiriting"
                    value={email}
                    onChange={handlerChangeEmailInput}
                    required/>
            </label>

            <label htmlFor="passwor1">
                <span className="hidden">Email:</span>
                <input 
                    type="email"
                    id="passwor1" 
                    className="relative w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Parolni kiriting"/>
            </label>

            <label 
                htmlFor="noteme"
                className="flex items-center gap-2 w-1/2
                            hover:cursor-pointer">
                <input 
                    type="checkbox"
                    id="noteme" />
                <span className="relative text-gray-400">
                    Meni eslab qol
                </span>
            </label>

            <button className="relative px-4 py-2 text-white bg-blue-600 rounded-lg 
                                hover:bg-blue-500">Tasdiqlash kodini olish</button>

        </form>
    )
};

export default SignInForm;