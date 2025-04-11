import React from 'react'

const CourseBook = () => {
  return (
    <>
    <div>
      <Navbarbook/>
    </div>
    <div>
       <SearchBooks/>
    </div>
    <div>
      <Booksearch/>
    </div>
    <div>
      <Bookcontents/>
    </div>
    </>
  )
}

function Navbarbook() {
  return (
    <div className="bg-[#2563EB]">
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

function SearchBooks(){
  return(
    <div className="bg-[#D5E3FC]">
      <br />
      <div
        className="text-5xl font-bold text-black flex items-center justify-center"
        style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)" }}
      >
        All Books
      </div>

      <div className=" flex  items-end justify-around p-4">
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-800 mb-2 text-sm font-medium"
          >
            Book Name:
          </label>
          <input
            id="subject"
            type="text"
            className="w-120 px-15 bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.4)] focus:outline-none py-3"
            defaultValue="Discrete Mathametics"
            style={{ borderRadius: "2px" }}
          />
        </div>
        <div>
          <label
            htmlFor="Author"
            className="block text-gray-800 mb-2 text-sm font-medium"
          >
            Author
          </label>
          <input
            id="course code"
            type="text"
            className="w-45 px-4 bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.4)] focus:outline-none py-3"
            defaultValue="Knneth H. Rossen"
            style={{ borderRadius: "2px" }}
          />
        </div>

        <div>
          <button className="flex items-center bg-blue-600 text-white font-semibold px-6 py-2 rounded-full border-2 shadow-md">
            <span className="mr-3">Search Book</span>
            <div className="bg-white rounded-full p-1 border-2 ">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
    
function Booksearch() {
  return (
    <div className="flex justify-start px-15 text-xl">
      Search Result Book: Discrete Mathematics  Kenneth H. Rossen
      <br></br>
      <br></br>
    </div>
  );
}


function Bookcontents() {
  return (
    <><div>
      <div className="flex justify-around py-8 ">
        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/f56d46485e5b45cb/Screenshot%202025-04-11%20060628.png?Expires=1838939821&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kd5bmMyTSMEQKUL5RvzXoLe1xy4VbYV56FmhVGWJNLcpFc8AtMTBV9s06pdfF~I92~mAhtulIrCfi6aeKRJySp9Ekzi8ZqLOQCf69-~9-FJiU-6JvQzJUphI3hmo7V6CFMgWM-8K4MS7tOjp3-FEADSN1i1pGIDVjAd4EqwRbzMTkg0YIhTJYwK7B7S4u-n7u033P6QIPo3MfWS8h58ppzts3oFnv2AZJlzAQX~ZqVAkGsVYfsY8dbVaXqks7y0screbM16xcKwc9QswndwCUvqJDBpZ593sVjTGXX97fWriejmztyPL0IHY0yau80ukwSylueM8RG3TDjQA6WLipg__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Discrete Mathematics and Its Applications 8th Edition Book.
          </div>
          <div className="text-orange-500">Kenneth Rossen</div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/256a9bb43c17468f/Screenshot%202025-04-11%20061322.png?Expires=1838940199&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ki36y09weCsdYIItRSimhOmBsArqlGsiWJda9OPRwEuyfne9D59EMEQMz-w6u~QALi8L8cVItGW-hG5CYeSrM6Eg5xmfP48oGmxWGpoLwPmdOHCcyYXDMSen1JeqvzuXcPCnuNZBkjKmaMs7exiO-Nrdc93eAKNHDUltIgYpolMNBraqGz7DleA6Vpp-Wws8Bg~sA2Zs6qKqIzEQvRcU7ueaAxs7fcUDuCEGs3uE~pX2LY8Qh1Ho-ZaEwcxul-QS6feOLXO5xqZTqR6qbrBZnbou3DgQMZx43Eni6DxwVvfNAnksdjRiGMshMQnmL0swUUrTrWp7p3CaOsVU3qG51w__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Database Past Paper and Guess Material 3rd Semester
          </div>
          <div className="text-orange-500">
            PU and Other Universities
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/5ee6f80ca5ac4ca8/Screenshot%202025-04-11%20061624.png?Expires=1838940376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=El90abBs2ncnK-PjDp8V3sRFJHWRKbUpXmc-Ck8NC-6wWpH53QcOdkV0cXSFPU0KM6yD~St6mbPj69y9LsHdu1IGC-XXQYNFPBS00sk0FA-qNJER0JFepjhmXYnuG3JsiFpX0MyC6Zqu2R6iw17A5mxkl5TVsNt~16Or-1V4iDXt~D4o4kY9tYo3aF3tWUNmdjtYgNQuobUx-wC5Tg5R27pySLSHrh-aLpGMJO3kOO4BtaE-EACHo-F6oEj2o3qFjh1eqeWDtkEkHoERSqT1LoRM3~UDdptW0v-GE71Qwf1tc2-PPWU-mz6whIiw2GnD8~3siIU1KIpPf0FqQaKGcQ__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Programming Fundementals C++ Programming and Analysis.
          </div>
          <div className="text-orange-500">D.S. Malik</div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>
      </div>
    </div><div className="flex justify-around py-8 ">
        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/f56d46485e5b45cb/Screenshot%202025-04-11%20060628.png?Expires=1838939821&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kd5bmMyTSMEQKUL5RvzXoLe1xy4VbYV56FmhVGWJNLcpFc8AtMTBV9s06pdfF~I92~mAhtulIrCfi6aeKRJySp9Ekzi8ZqLOQCf69-~9-FJiU-6JvQzJUphI3hmo7V6CFMgWM-8K4MS7tOjp3-FEADSN1i1pGIDVjAd4EqwRbzMTkg0YIhTJYwK7B7S4u-n7u033P6QIPo3MfWS8h58ppzts3oFnv2AZJlzAQX~ZqVAkGsVYfsY8dbVaXqks7y0screbM16xcKwc9QswndwCUvqJDBpZ593sVjTGXX97fWriejmztyPL0IHY0yau80ukwSylueM8RG3TDjQA6WLipg__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Discrete Mathematics and Its Applications 8th Edition Book.
          </div>
          <div className="text-orange-500">Kenneth Rossen</div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/256a9bb43c17468f/Screenshot%202025-04-11%20061322.png?Expires=1838940199&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ki36y09weCsdYIItRSimhOmBsArqlGsiWJda9OPRwEuyfne9D59EMEQMz-w6u~QALi8L8cVItGW-hG5CYeSrM6Eg5xmfP48oGmxWGpoLwPmdOHCcyYXDMSen1JeqvzuXcPCnuNZBkjKmaMs7exiO-Nrdc93eAKNHDUltIgYpolMNBraqGz7DleA6Vpp-Wws8Bg~sA2Zs6qKqIzEQvRcU7ueaAxs7fcUDuCEGs3uE~pX2LY8Qh1Ho-ZaEwcxul-QS6feOLXO5xqZTqR6qbrBZnbou3DgQMZx43Eni6DxwVvfNAnksdjRiGMshMQnmL0swUUrTrWp7p3CaOsVU3qG51w__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Database Past Paper and Guess Material 3rd Semester
          </div>
          <div className="text-orange-500">
            PU and Other Universities
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/5ee6f80ca5ac4ca8/Screenshot%202025-04-11%20061624.png?Expires=1838940376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=El90abBs2ncnK-PjDp8V3sRFJHWRKbUpXmc-Ck8NC-6wWpH53QcOdkV0cXSFPU0KM6yD~St6mbPj69y9LsHdu1IGC-XXQYNFPBS00sk0FA-qNJER0JFepjhmXYnuG3JsiFpX0MyC6Zqu2R6iw17A5mxkl5TVsNt~16Or-1V4iDXt~D4o4kY9tYo3aF3tWUNmdjtYgNQuobUx-wC5Tg5R27pySLSHrh-aLpGMJO3kOO4BtaE-EACHo-F6oEj2o3qFjh1eqeWDtkEkHoERSqT1LoRM3~UDdptW0v-GE71Qwf1tc2-PPWU-mz6whIiw2GnD8~3siIU1KIpPf0FqQaKGcQ__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Programming Fundementals C++ Programming and Analysis.
          </div>
          <div className="text-orange-500">D.S. Malik</div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>
      </div>
      
      <div className="flex justify-around py-8 ">
        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/f56d46485e5b45cb/Screenshot%202025-04-11%20060628.png?Expires=1838939821&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kd5bmMyTSMEQKUL5RvzXoLe1xy4VbYV56FmhVGWJNLcpFc8AtMTBV9s06pdfF~I92~mAhtulIrCfi6aeKRJySp9Ekzi8ZqLOQCf69-~9-FJiU-6JvQzJUphI3hmo7V6CFMgWM-8K4MS7tOjp3-FEADSN1i1pGIDVjAd4EqwRbzMTkg0YIhTJYwK7B7S4u-n7u033P6QIPo3MfWS8h58ppzts3oFnv2AZJlzAQX~ZqVAkGsVYfsY8dbVaXqks7y0screbM16xcKwc9QswndwCUvqJDBpZ593sVjTGXX97fWriejmztyPL0IHY0yau80ukwSylueM8RG3TDjQA6WLipg__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Discrete Mathematics and Its Applications 8th Edition Book.
          </div>
          <div className="text-orange-500">Kenneth Rossen</div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/256a9bb43c17468f/Screenshot%202025-04-11%20061322.png?Expires=1838940199&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ki36y09weCsdYIItRSimhOmBsArqlGsiWJda9OPRwEuyfne9D59EMEQMz-w6u~QALi8L8cVItGW-hG5CYeSrM6Eg5xmfP48oGmxWGpoLwPmdOHCcyYXDMSen1JeqvzuXcPCnuNZBkjKmaMs7exiO-Nrdc93eAKNHDUltIgYpolMNBraqGz7DleA6Vpp-Wws8Bg~sA2Zs6qKqIzEQvRcU7ueaAxs7fcUDuCEGs3uE~pX2LY8Qh1Ho-ZaEwcxul-QS6feOLXO5xqZTqR6qbrBZnbou3DgQMZx43Eni6DxwVvfNAnksdjRiGMshMQnmL0swUUrTrWp7p3CaOsVU3qG51w__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Database Past Paper and Guess Material 3rd Semester
          </div>
          <div className="text-orange-500">
            PU and Other Universities
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/5ee6f80ca5ac4ca8/Screenshot%202025-04-11%20061624.png?Expires=1838940376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=El90abBs2ncnK-PjDp8V3sRFJHWRKbUpXmc-Ck8NC-6wWpH53QcOdkV0cXSFPU0KM6yD~St6mbPj69y9LsHdu1IGC-XXQYNFPBS00sk0FA-qNJER0JFepjhmXYnuG3JsiFpX0MyC6Zqu2R6iw17A5mxkl5TVsNt~16Or-1V4iDXt~D4o4kY9tYo3aF3tWUNmdjtYgNQuobUx-wC5Tg5R27pySLSHrh-aLpGMJO3kOO4BtaE-EACHo-F6oEj2o3qFjh1eqeWDtkEkHoERSqT1LoRM3~UDdptW0v-GE71Qwf1tc2-PPWU-mz6whIiw2GnD8~3siIU1KIpPf0FqQaKGcQ__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Programming Fundementals C++ Programming and Analysis.
          </div>
          <div className="text-orange-500">D.S. Malik</div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>
      </div>
      
      <div className="flex justify-around py-8 ">
        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/f56d46485e5b45cb/Screenshot%202025-04-11%20060628.png?Expires=1838939821&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kd5bmMyTSMEQKUL5RvzXoLe1xy4VbYV56FmhVGWJNLcpFc8AtMTBV9s06pdfF~I92~mAhtulIrCfi6aeKRJySp9Ekzi8ZqLOQCf69-~9-FJiU-6JvQzJUphI3hmo7V6CFMgWM-8K4MS7tOjp3-FEADSN1i1pGIDVjAd4EqwRbzMTkg0YIhTJYwK7B7S4u-n7u033P6QIPo3MfWS8h58ppzts3oFnv2AZJlzAQX~ZqVAkGsVYfsY8dbVaXqks7y0screbM16xcKwc9QswndwCUvqJDBpZ593sVjTGXX97fWriejmztyPL0IHY0yau80ukwSylueM8RG3TDjQA6WLipg__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Discrete Mathematics and Its Applications 8th Edition Book.
          </div>
          <div className="text-orange-500">Kenneth Rossen</div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/256a9bb43c17468f/Screenshot%202025-04-11%20061322.png?Expires=1838940199&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ki36y09weCsdYIItRSimhOmBsArqlGsiWJda9OPRwEuyfne9D59EMEQMz-w6u~QALi8L8cVItGW-hG5CYeSrM6Eg5xmfP48oGmxWGpoLwPmdOHCcyYXDMSen1JeqvzuXcPCnuNZBkjKmaMs7exiO-Nrdc93eAKNHDUltIgYpolMNBraqGz7DleA6Vpp-Wws8Bg~sA2Zs6qKqIzEQvRcU7ueaAxs7fcUDuCEGs3uE~pX2LY8Qh1Ho-ZaEwcxul-QS6feOLXO5xqZTqR6qbrBZnbou3DgQMZx43Eni6DxwVvfNAnksdjRiGMshMQnmL0swUUrTrWp7p3CaOsVU3qG51w__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Database Past Paper and Guess Material 3rd Semester
          </div>
          <div className="text-orange-500">
            PU and Other Universities
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/5ee6f80ca5ac4ca8/Screenshot%202025-04-11%20061624.png?Expires=1838940376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=El90abBs2ncnK-PjDp8V3sRFJHWRKbUpXmc-Ck8NC-6wWpH53QcOdkV0cXSFPU0KM6yD~St6mbPj69y9LsHdu1IGC-XXQYNFPBS00sk0FA-qNJER0JFepjhmXYnuG3JsiFpX0MyC6Zqu2R6iw17A5mxkl5TVsNt~16Or-1V4iDXt~D4o4kY9tYo3aF3tWUNmdjtYgNQuobUx-wC5Tg5R27pySLSHrh-aLpGMJO3kOO4BtaE-EACHo-F6oEj2o3qFjh1eqeWDtkEkHoERSqT1LoRM3~UDdptW0v-GE71Qwf1tc2-PPWU-mz6whIiw2GnD8~3siIU1KIpPf0FqQaKGcQ__"
              className="w-90 h-61  " />
          </div>
          <div className="text-sm text-black font-bold px-4">
            Programming Fundementals C++ Programming and Analysis.
          </div>
          <div className="text-orange-500">D.S. Malik</div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </button>
        </div>
      </div>
      </>
      )
    }



      export default CourseBook