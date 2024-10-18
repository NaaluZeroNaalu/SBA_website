

function Contactus(){


    return(

        <>
<h1 style={{fontWeight:"bold",textAlign:"center"}}>Contact Us</h1>
      <form className="space-y-8 container">
      {/* Form Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-lg font-semibold text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Your Full Name"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Work Email Address"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          />
        </div>
      </div>
      
      {/* Form Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-lg font-semibold text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Your Phone Number"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-lg font-semibold text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            placeholder="Your Company Name"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          />
        </div>
      </div>
      
      {/* Support Section */}
      <div>
        <label
          htmlFor="support"
          className="block text-lg font-semibold text-gray-700"
        >
          Support Required On
        </label>
        <select
          id="support"
          className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
        >
          <option value="" disabled>
            Choose a Solution/Service
          </option>
          <option value="service1">Data and AI</option>
          <option value="service2">Infra</option>
          <option value="service3">Business Support</option>
        </select>
      </div>

      {/* Query Section */}
      <div>
        <label
          htmlFor="query"
          className="block text-lg font-semibold text-gray-700"
        >
          Query
        </label>
        <textarea
          id="query"
          placeholder="Describe your Requirement in Detail"
          className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          rows="5"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="" style={{textAlign:"center"}}>
        <button
          type="submit"
          className="px-8 py-3 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg"
          style={{backgroundColor:"#3f649a"}}
        >
          Submit Request
        </button>
      </div>
    </form>
    <br /><br /><br />
        </>
    )
}

export default Contactus