import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SubmitedBy from "./SubmitedBy";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      name,
      email,
      password,
      confirmPassword,
    };
    axios
      .post("http://localhost:5378/form", data)
      .then(() => {
        console.log(data);
       
      })
      .catch((error) => {
        // alert('An error happened. Please Chack console');
        console.log(error);
      }); 
      navigate("/");
  };
  useEffect(() => {
    const fecthData = async () => {
      await axios.get("http://localhost:5378/form").then((res) => {
        setFormData(res.data);
      });
    };
    fecthData();
  }, []);
  return (
    <div className="m-auto w-full">
      <form className="flex flex-col gap-5 justify-center items-center w-1/2 bg-orange-500 text-white font-bold">
        <h2 className="mt-5 py-4">Register Form</h2>
        <div className="flex flex-col gap-4 flex-1">
          <label>User Name</label>
          <input
            type="text"
            value={name}
            title="name"
            placeholder="User Name"
            className="px-5 py-2 border-orange-400 rounded text-gray-800 "
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <label>email</label>
          <input
            type="email"
            value={email}
            title="name"
            placeholder="email"
            className="px-5 py-2 border-solid border-orange-400 rounded text-gray-800 "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <label>Password</label>
          <input
            type="text"
            value={password}
            title="name"
            placeholder="Password"
            className="px-5 py-2 border-orange-400 rounded text-gray-800 "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <label> Confirm Password</label>
          <input
            type="text"
            value={confirmPassword}
            title="name"
            placeholder="Confirm Password"
            className="px-5 py-2 border-orange-400 rounded text-gray-800 "
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="px-5 py-1 bg-orange-400 text-white font-bold border-none rounded mb-5"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      <div>
        <div>
            
                 {formData.map((item) => (
                  <SubmitedBy key={item._id} item={item}/>
                ))}
            
     
     
        </div>
      </div>
    </div>
  );
};
export default Form;
