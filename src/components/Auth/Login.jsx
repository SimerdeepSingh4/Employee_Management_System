import React, { useState } from "react";

const Login = ({ handleLogin, handleSignup }) => {
  const [isLogin, setIsLogin] = useState(true);

  // Form states
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin(loginData.email, loginData.password);
      setLoginData({ email: "", password: "" });
    } else {
      handleSignup(
        signupData.name,
        signupData.email,
        signupData.password,
        signupData.confirmPassword
      );
      setSignupData({ name: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
<div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
  <div className="bg-white/10 backdrop-blur-lg p-10 sm:p-16 rounded-2xl shadow-xl border border-white/20 w-full max-w-md transition-all duration-300">
    <h1 className="text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
      {isLogin ? (
        <>
          Welcome Back <span className="animate-wave">👋</span>
        </>
      ) : (
        <>
          Create an Account 📝
        </>
      )}
    </h1>
        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={signupData.name}
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
              className="text-white placeholder-gray-300 bg-white/10 border border-white/20 rounded-full py-3 px-5 text-lg outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={isLogin ? loginData.email : signupData.email}
            onChange={(e) =>
              isLogin
                ? setLoginData({ ...loginData, email: e.target.value })
                : setSignupData({ ...signupData, email: e.target.value })
            }
            className="text-white placeholder-gray-300 bg-white/10 border border-white/20 rounded-full py-3 px-5 text-lg outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={isLogin ? loginData.password : signupData.password}
            onChange={(e) =>
              isLogin
                ? setLoginData({ ...loginData, password: e.target.value })
                : setSignupData({ ...signupData, password: e.target.value })
            }
            className="text-white placeholder-gray-300 bg-white/10 border border-white/20 rounded-full py-3 px-5 text-lg outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
            required
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  confirmPassword: e.target.value,
                })
              }
              className="text-white placeholder-gray-300 bg-white/10 border border-white/20 rounded-full py-3 px-5 text-lg outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
              required
            />
          )}

          <button
            type="submit"
            className="mt-5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-5 rounded-full text-lg shadow-lg transition-transform duration-200 hover:scale-105"
          >
            {isLogin ? "Log in" : "Sign up"}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6 text-sm">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-emerald-400 hover:underline cursor-pointer"
          >
            {isLogin ? "Sign up" : "Log in"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
