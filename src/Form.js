import React from "react";

import { useState } from "react";

const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
  });

//   const handleName = (e) => {
//     console.log(e.target.value);
//     setName(e.target.value);
//   };

//   const handleName1 = (e) => {
//     console.log(e.target.value);
//     setEmail(e.target.value);
//   };

//   const handleName2 = (e) => {
//     console.log(e.target.value);
//     setPass(e.target.value);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log(`Name: ${formData.name}`);
    console.log(`Email: ${formData.email}`);
    console.log(`Password: ${formData.pass}`);
  };


  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <br />
        <br />
        <br />
        <label>
          Name:
          <input type="text" value={FormData.name}  name="name" onChange={handleInput} />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input type="email" value={FormData.email} name="email" onChange={handleInput} />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" value={FormData.pass} name="pass" onChange={handleInput} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
