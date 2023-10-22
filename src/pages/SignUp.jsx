import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === formData.repeatPassword) {
      console.log("Username:", formData.username);
      console.log("Password:", formData.password);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="flex flex-col gap-4 border-2 p-8 rounded-xl">
        <h1 className="mb-3 text-2xl">Sign up</h1>

        <div className="flex flex-col">
          <input
            type="email"
            className="border border-1 h-8 text-sm w-56 p-2"
            placeholder="name@example.com"
          />
          <label className="text-sm">Email address</label>
        </div>
        <div className="flex flex-col">
          <input
            type="password"
            className="border border-1 h-8 text-sm w-56 p-2"
            placeholder="Password"
          />
          <label className="text-sm">Password</label>
        </div>
        <div className="flex flex-col">
          <input
            type="password"
            className="border border-1 h-8 text-sm w-56 p-2"
            placeholder="Password"
          />
          <label className="text-sm">Repeat Password</label>
        </div>

        <div className="form-check text-start my-3"></div>
        <button
          className="btn btn-primary w-100 py-2 border-2 rounded-full"
          type="submit"
        >
          Register
        </button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
      </form>
    </div>
  );
}

export default SignUp;
