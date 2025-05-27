import React from "react";
import {Link} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
    return(
        <>
            <div className="bg-[#2563EB] h-18"></div>
            <div className="flex flex-col items-center justify-center mx-auto max-w-max px-6 pt-10 pb-20">
                <main>
                    <img
                        src="/Images/not-found.svg"
                        alt="Not Found"
                        height={400}
                        width={400}
                    />
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2563EB] text-center">Oops! Page Not Found</h1>
                        <br />
                        <p>Please check your URL</p>
                        <br />
                        <Link className='inline-flex items-center gap-3 text-xl sm:text-2xl md:text-2xl cursor-pointer hover:text-gray-700 hover:underline text-center' to="/">
                            <FaArrowLeft />
                            <span>Go back home</span>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    )
}

export default NotFound;