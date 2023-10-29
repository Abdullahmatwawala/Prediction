import React from 'react'
import Hero from './Hero'

const Upload = () => {
    return (
        <div >

            <Hero />


            <section className="mt-16 w-full max-w-2xl justify-center items-center mx-auto">

                {/* Search */}
                <div className="flex flex-col w-full gap-2">

                    <label className="block mb-2 text-sm font-medium text-gray-900 text-lg" htmlFor="file_input">Upload file</label>
                    <input className="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none " id="file_input" type="file" />
                </div>
        </section >
        </div>

        )
}

export default Upload