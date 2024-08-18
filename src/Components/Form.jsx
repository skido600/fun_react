import React, { useState } from "react";

function Form() {
  const [formdata, setformdata] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  //store error
  const [errors, seterrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  function submetting(e) {
    const validateE = {};
    const nameRegex = /^[A-Za-zÀ-ÖØ-Ýà-öø-ÿ\s'-]{2,50}$/;
    const emailRegex = /^(?!.*\.\.)[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneNumberRegex =
      /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
    e.preventDefault();

    //firstnamevalidate
    if (!formdata.username.trim()) {
      validateE.username = "username is required";
    } else if (!nameRegex.test(formdata.username)) {
      validateE.username =
        "Invalid name. Only letters, spaces, and certain punctuation are allowed.";
    } else if (formdata.username < 4) {
      validateE.username = "Name must be greater than three characters.";
    }

    ///lastname
    if (!formdata.lastname.trim()) {
      validateE.lastname = "lastname is required";
    } else if (!nameRegex.test(formdata.lastname)) {
      validateE.lastname =
        "Invalid name. Only letters, spaces, and certain punctuation are allowed.";
    } else if (formdata.lastname < 4) {
      validateE.lastname = "Name must be greater than three characters.";
    }
    //email
    if (!emailRegex.test(formdata.email)) {
      validateE.email = "invalid email";
    }

    if (!phoneNumberRegex.test(formdata.phone)) {
      validateE.phone = "invalid phone number";
    }
    seterrors(validateE);

    if (Object.keys(validateE).length === 0) {
      console.log("sumitted successful", formdata);
    }
    console.log(errors);
  }

  return (
    <>
      <main className="bg-white p-6 rounded-lg shadow-md  lg:w-full max-w-md m-4">
        <h3 className="text-blue-500 font-bold">React form val</h3>
        <form onSubmit={submetting}>
          <h2 className="text-2xl font-semibold mb-4">Sign up</h2>

          <div className="mb-4">
            <label
              for="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              for="lastname"
              className="block text-gray-700 font-medium mb-2"
            >
              Last Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="lastname"
              name="lastname"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname}</p>
            )}
          </div>

          <div className="mb-4">
            <label for="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label for="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              onChange={handleChange}
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default Form;
