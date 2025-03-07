import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/userSlice";
import { Eye, EyeOff } from "lucide-react"; // Import icons

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle state for password visibility
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get logged-in user from Redux
  const user = useSelector((state) => state.user.user);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      let res;
      if (isLogin) {
        res = await axios.post(
          `${USER_API_END_POINT}/login`,
          { email, password, role },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
      } else {
        res = await axios.post(
          `${USER_API_END_POINT}/register`,
          { name, email, password, phoneNumber, role },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
      }

      if (res.data.success) {
        if (isLogin) {
          dispatch(getUser(res.data));
          navigate("/");
        } else {
          setIsLogin(true);
        }
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center w-[80%]">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5">
          Happening now.
        </h1>

        {user ? (
          <div className="bg-white shadow-md p-6 rounded-lg w-[50%]">
            <h2 className="text-2xl font-bold mb-3">Welcome, {user.name}!</h2>
            <p className="text-lg">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-lg">
              <strong>Role:</strong> {user.role}
            </p>
          </div>
        ) : (
          <div className="w-[50%] bg-white p-8 rounded-lg border shadow-lg">
            <h1 className="mb-4 text-2xl text-center font-bold">
              {isLogin ? "Login" : "Signup"}
            </h1>
            <form onSubmit={submitHandler} className="flex flex-col">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="border border-gray-800 px-3 py-2 rounded-lg my-1"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@gmail.com"
                autoComplete="email"
                className="border border-gray-800 px-3 py-2 rounded-lg my-1"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="border border-gray-800 px-3 py-2 rounded-lg my-1 w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {!isLogin && (
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+91 1234567890"
                  className="border border-gray-800 px-3 py-2 rounded-lg my-1"
                />
              )}
              {/* Dropdown for Role Selection */}
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-gray-800 px-3 py-2 rounded-lg my-1"
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="admin">Admin</option>
                <option value="travelagency">Travel Agency</option>
                <option value="customer">Customer</option>
              </select>

              <button className="bg-blue-500 py-2 mt-4 rounded-lg text-white font-semibold">
                {isLogin ? "Login" : "Create Account"}
              </button>
              <p className="mt-4 text-center">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 cursor-pointer font-bold"
                >
                  {isLogin ? "Signup" : "Login"}
                </span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
