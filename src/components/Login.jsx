// import React from 'react'
import Hero from './Hero'

const Login = () => {
    return (
        <div >

            <header className="w-full  justify-center items-center flex-col mb-8 ">
                <h1 className="head_text">

                    <span className="orange_gradient">
                        CRIME PREDICTION
                    </span> <br className="max-md:hidden " />
                    : Anticipating Tomorrow's Trouble <br /> Crime Predictions Unveiled      </h1>
                
            </header>

            <section className=" w-full max-w-2xl justify-center items-center mx-auto">

                {/* Search */}
                <div className="flex flex-col w-full gap-2">

                    <section className=''>
                        <div className="flex flex-col items-center justify-center   ">

                            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                        Sign in to your account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500" placeholder="name@company.com" required="" />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500" required="" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 -700 -600 -primary-600 -gray-800" required="" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="remember" className="text-gray-500 -300">Remember me</label>
                                                </div>
                                            </div>
                                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline -500">Forgot password?</a>
                                        </div>
                                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                                        <p className="text-sm font-light text-gray-500 -400">
                                            Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline -500">Sign up</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section >
        </div>
    )
}

export default Login