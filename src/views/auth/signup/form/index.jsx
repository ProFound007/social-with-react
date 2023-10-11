const AuthSignUpForm = () => {
    return (
        <>
            <form className="relative grid grid-cols-1 gap-4">

                {/* Email */}
                <label htmlFor="emailID">
                    <input 
                        id="emailID"
                        type="email"
                        placeholder="Elektron pochta manzili"
                        className="relatiev w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                </label>

                <div className="relative grid gap-4 grid-cols-1
                sm:grid-cols-2">
                    <label htmlFor="emailID">
                        <input 
                            id="emailID"
                            type="password"
                            placeholder="Yangi parol kiriting"
                            className="relatiev w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </label>
                    <label htmlFor="emailID">
                        <input 
                            id="emailID"
                            type="password"
                            placeholder="Parolni qayta kiriting"
                            className="relatiev w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </label>
                </div>

                <label htmlFor="noteme" className="flex gap-2 items-center">
                    <input type="checkbox" id="noteme"/>
                    <span className="text-sm text-gray-500">Meni eslab qol</span>
                </label>


                <button type="submit" className="relative px-4 py-2 bg-blue-500 rounded text-white 
                hover:bg-blue-600">
                    Ro`yxatdan o`tish
                </button>
            </form>
        </>
    )
};

export default AuthSignUpForm;