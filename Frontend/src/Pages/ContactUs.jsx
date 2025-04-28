
import React, { useRef } from 'react';
import { FaWhatsapp, FaYoutube  } from "react-icons/fa";
import { REACT_APP_EMAILJS_ACCESS_KEY } from '../../utilis';

function Navbar() {
  return (
    <div className="bg-[#2563EB]">
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}


const ContactForm = () => {
  const form = useRef();
  const [result, setResult] = React.useState("");

  const sendEmail =async (event) => {
    
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
    console.log(REACT_APP_EMAILJS_ACCESS_KEY);

      formData.append("access_key", REACT_APP_EMAILJS_ACCESS_KEY);
      
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }

  };

  return (
    <>
      <Navbar />
      <div className="w-full flex bg-gray-50 p-4 sm:p-6 dark:bg-slate-900 ">
        <div className=" dark:bg-slate-900 container mx-auto max-w-[1440px] w-full">
          <div className="dark:bg-slate-900 dark:text-slate-300  h-[480px] grid grid-cols-1 sm:grid-cols-2 items-start gap-6 sm:gap-8 md:gap-12 p-4 sm:p-6 md:p-8 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
            <div>
              <h1 className="text-[#2563EB] text-4xl sm:text-3xl font-semibold">Let's Talk</h1>
              <p className="text-lg sm:text-sm text-slate-500 mt-2 sm:mt-4 leading-relaxed">
                Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
              </p>

              <div className="mt-8 sm:mt-12">
                <h2 className="text-slate-900 text-sm sm:text-base font-semibold dark:text-white">Email</h2>
                <ul className="mt-2 sm:mt-4">
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#007bff" viewBox="0 0 479.058 479.058">
                        <path
                          d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        />
                      </svg>
                    </div>
                    <a href="mailto:hacktech877@gmail.com" className="text-xs sm:text-sm ml-3 sm:ml-4">
                      <small className="block text-slate-900 dark:text-white">Mail</small>
                      <span className="text-blue-600 font-medium dark:text-white">hacktech877@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-8 sm:mt-12">
                <h2 className="text-slate-900 text-sm sm:text-base font-semibold">Socials</h2>
                <ul className="flex mt-2 sm:mt-4 space-x-3 sm:space-x-4">
                  
                  {/* Whatsapp */}
                  <li className="cursor-pointer bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-100 transition-colors duration-300">
                    <a href="https://wa.me/+923246987780" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="text-[#25D366]" size={16} />
                    </a>
                  </li>
                  {/* Youtube */}

                  <li className="cursor-pointer bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-100 transition-colors duration-300">
                    <a href="https://www.youtube.com/@agtech3768" target="_blank" rel="noopener noreferrer">
                    <FaYoutube  className="text-[#e40d0d]" size={16} />
                    </a>
                  </li>
                  {/* Facebook */}
                  <li className="bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-100 transition-colors duration-300">
                    <a href="https://www.facebook.com/aligates.915" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                    </a>
                  </li>
                  {/* Linkedin  */}
                  <li className="cursor-pointer bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-100 transition-colors duration-300">
                    <a href="https://www.linkedin.com/in/aligates877/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0A66C2" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </li>
                  {/* Instagram */}
                  <li className="cursor-pointer bg-[#e6e6e6cf] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-100 transition-colors duration-300">
                    <a href="https://www.instagram.com/aligates915?igsh=azZldnRwcmZpN29q" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E4405F" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className=" dark:bg-slate-500 dark:text-white dark:placeholder-gray-100 w-full text-slate-900 rounded-md py-2 sm:py-2.5 px-3 sm:px-4 border text-xs sm:text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="dark:bg-slate-500 dark:text-white dark:placeholder-gray-100 w-full text-slate-900 rounded-md py-2 sm:py-2.5 px-3 sm:px-4 border text-xs sm:text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="dark:bg-slate-500 dark:text-white dark:placeholder-gray-100 w-full text-slate-900 rounded-md py-2 sm:py-2.5 px-3 sm:px-4 border text-xs sm:text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="dark:bg-slate-500 dark:text-white dark:placeholder-gray-100 w-full text-slate-900 rounded-md px-3 sm:px-4 border text-xs sm:text-sm pt-2 sm:pt-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-xs sm:text-sm md:text-[15px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 w-full !mt-4 sm:!mt-6 transition-all duration-300 hover:shadow-lg"
              >
                Send
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;