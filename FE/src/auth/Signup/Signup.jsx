import React, { useContext, useEffect, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Signup = () => {
  const [inputData, setInputData] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };
  const handleRegister = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("username", inputData.username);
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);
    formData.append("confirmpassword", inputData.confirmpassword);
    await axios
      .post("http://localhost:5000/users/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((val) => {
        if (val.status === 201) {
          setReloadUser(!reloadUser);
          setInputData({
            email: "",
            username: "",
            password: "",
            confirmpassword: "",
            role: "user",
          });
          setImage(null);
          setRole(false);
          toast.success("Register successfully", {
            position: "bottom-right",
          });
          navigate("/login");
        } else {
          toast.error("Something went wrong!", {
            position: "bottom-right",
          });
        }
      })
      .catch((e) =>
        toast.error(e?.response?.data?.message, {
          position: "bottom-right",
        })
      );
  };

  return (
    <div className="formDivMain ">
      <h2 className="text-[5vh] prime2 font-bold ">Register</h2>
      <div className="fieldsAuth  w-full gap-y-2">
        <input
          onChange={handleChange}
          value={inputData.username}
          name="username"
          type="text"
          className="authField"
          placeholder="Username"
        />
        <input
          onChange={handleChange}
          value={inputData.email}
          name="email"
          type="text"
          className="authField"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          value={inputData.password}
          name="password"
          type="password"
          className="authField"
          placeholder="Password"
        />
        <input
          onChange={handleChange}
          value={inputData.confirmpassword}
          name="confirmpassword"
          type="password"
          className="authField"
          placeholder="Confrim Password"
        />
        <div className="file-upload">
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setImage(e.target.files[0])}
            className="file-input"
          />
          <label htmlFor="fileInput" className="custom-file-label">
            Choose File
          </label>
        </div>
      </div>
      <div className="flex justify-end items-center w-full">
        <small className="text-gray-400  text-[2vh]">
          Already have an account?
        </small>
        <span
          onClick={() => navigate("/login")}
          className="prime2 activePrime1 cursor-pointer text-[2.3vh] ml-2"
        >
          Login
        </span>
      </div>

      <button onClick={handleRegister} className="btnMain mt-5">
        Register
      </button>
    </div>
  );
};

export default Signup;
